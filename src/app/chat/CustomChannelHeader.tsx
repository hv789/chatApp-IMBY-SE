import { useUser } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";
import { Bell, BellOff, Video } from "lucide-react";
import {
  ChannelHeader,
  ChannelHeaderProps,
  useChannelActionContext,
  useChannelStateContext,
} from "stream-chat-react";

export default function CustomChannelHeader(props: ChannelHeaderProps) {
  const { user } = useUser();

  const {
    channel: { id: channelId },
  } = useChannelStateContext();

  const VideoConference = () => {
    window.open(`https://echomeet.vercel.app/`, "_blank");
  };

  return (
    <div className="flex items-center justify-between gap-3 bg-white dark:bg-[#17191c]">
      <ChannelHeader {...props} />
      {user && channelId && (
        <div className="flex flex-row space-x-4 me-6">
          <Video className="cursor-pointer hover:text-sky-400" onClick={() => VideoConference()} />
          <ChannelNotificationToggleButton user={user} channelId={channelId} />
        </div>
      )}
    </div>
  );
}

interface ChannelNotificationToggleButtonProps {
  user: UserResource;
  channelId: string;
}

function ChannelNotificationToggleButton({
  user,
  channelId,
}: ChannelNotificationToggleButtonProps) {
  const { addNotification } = useChannelActionContext();

  const mutedChannels = user.unsafeMetadata.mutedChannels || [];

  const channelMuted = mutedChannels.includes(channelId);

  async function setChannelMuted(channelId: string, muted: boolean) {
    try {
      let mutedChannelsUpdate: string[];

      if (muted) {
        mutedChannelsUpdate = [...mutedChannels, channelId];
      } else {
        mutedChannelsUpdate = mutedChannels.filter((id) => id !== channelId);
      }

      await user.update({
        unsafeMetadata: {
          mutedChannels: mutedChannelsUpdate,
        },
      });

      addNotification(
        `Channel notifications ${muted ? "muted" : "unmuted"}`,
        "success"
      );
    } catch (error) {
      console.error(error);
      addNotification("Something went wrong. Please try again.", "error");
    }
  }

  return (
    <div className="hover:text-sky-400">
      {!channelMuted ? (
        <span title="Mute channel notifications">
          <BellOff
            className="cursor-pointer"
            onClick={() => setChannelMuted(channelId, true)}
          />
        </span>
      ) : (
        <span title="Unmute channel notifications">
          <Bell
            className="cursor-pointer"
            onClick={() => setChannelMuted(channelId, false)}
          />
        </span>
      )}
    </div>
  );
}

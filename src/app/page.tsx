import Button from "@/components/Button";
import Link from "next/link";
import logo from "../../public/echochat_logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10">
      <Image src={logo} alt="EchoChat" className="h-40 w-40" />
      <h1 className="mb-1 text-6xl font-mono font-extrabold text-blue-500">EchoChat</h1>
      <Button as={Link} href="/chat">
        Start chatting
      </Button>
    </div>
  );
}

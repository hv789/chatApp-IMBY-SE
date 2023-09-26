import Button from "@/components/Button";
import Link from "next/link";
import logo from "../../public/echochat_logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-1 text-6xl font-extrabold text-blue-500">EchoChat</h1>
      <Image src={logo} alt="EchoChat" className="w-40 h-40" />
      <Button as={Link} href="/chat">
        Start chatting
      </Button>
    </div>
  );
}

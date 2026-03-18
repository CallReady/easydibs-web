import Image from "next/image";
import logo from "@/assets/logos/logo.png";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1F1D1B] px-6 py-4 flex items-center justify-between">
      <Image src={logo} alt="EasyDibs" height={40} width={150} className="h-10 w-auto" />
      <a href="#download" className="font-nunito text-white text-sm">
        Download
      </a>
    </nav>
  );
}

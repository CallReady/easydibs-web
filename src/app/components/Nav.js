import Image from "next/image";
import logo from "@/assets/logos/logo.png";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#1F1D1B",
        padding: "16px 40px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Image src={logo} alt="EasyDibs" height={40} width={150} style={{ height: "40px", width: "auto" }} />
      <a
        href="#download"
        style={{
          color: "#FFFFFF",
          textDecoration: "none",
          fontSize: "0.875rem",
          fontFamily: "var(--font-nunito), sans-serif",
        }}
      >
        Download
      </a>
    </nav>
  );
}

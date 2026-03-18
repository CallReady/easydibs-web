import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#F2F0EC" }}>
      <Nav />
      <Hero />
    </div>
  );
}

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-hero px-6 py-4 flex items-center justify-between">
      <span className="font-nunito text-white text-xl">
        <span className="font-normal">easy</span>
        <span className="font-extrabold">dibs</span>
      </span>
      <a href="#download" className="font-nunito text-white text-sm">
        Download
      </a>
    </nav>
  );
}

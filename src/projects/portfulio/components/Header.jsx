const Header = () => {
  return (
    <header className="flex justify-center">
      <nav className="bg-[#24273c] mt-4 flex justify-between *:p-4 rounded-3xl *:hover:bg-zinc-600">
        <a className="flex hover:rounded-l-3xl">Home</a>
        <a className="flex ">Work</a>
        <a className="flex">Service</a>
        <a className="flex">Projcets</a>
        <a className="flex rounded-r-3xl">Blog</a>
      </nav>
    </header>
  );
};

export default Header;

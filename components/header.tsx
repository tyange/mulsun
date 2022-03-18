const Header = () => {
  return (
    <header className="flex justify-center">
      <nav className="box-border flex justify-between w-3/4 p-5">
        <div className="">
          <span className="text-red-300">mulsun</span>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>user</li>
            <li>login / join</li>
            <li>credits</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

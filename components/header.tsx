const Header = () => {
  return (
    <header>
      <nav className="flex justify-between p-5 box-border">
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

const Footer = () => {
  return (
    <footer className="flex justify-center gap-2 items-center text-xs">
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <a href="https://github.com/tyange">tyange</a>
    </footer>
  );
};

export default Footer;

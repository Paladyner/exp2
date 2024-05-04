const HeaderList = ({ children }) => {
  return (
    <>
      <li>
        <a className="text-white transition hover:text-[#f7cf02]" href="/">
          {children}
        </a>
      </li>
    </>
  );
};

export default HeaderList;

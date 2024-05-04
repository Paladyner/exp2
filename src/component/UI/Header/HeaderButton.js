const HeaderButton = ({ children }) => {
  return (
    <a
      className="block  border-2 border-white rounded-md bg-[#f76402] px-5 py-2.5 text-sm font-medium text-white transition hover:text-[#f76402] hover:bg-white"
      href="/"
    >
      {children}
    </a>
  );
};

export default HeaderButton;

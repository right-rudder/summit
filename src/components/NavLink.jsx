const NavLink = ({ menuItem, pathname, toggled, onShow }) => {
  const isActive = menuItem.submenu.some((item) => item.link === pathname);
  return (
    <div className="relative">
      <a
        id={menuItem.name}
        onClick={onShow}
        className={`cursor-pointer text-lg text-white py-2 hover:border-b-2 border-main-red whitespace-nowrap ${
          isActive ? "border-b-2" : ""
        }`}
      >
        {menuItem.name}
      </a>
      <div
        className={`overflow-hidden text-white ${
          toggled ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-out absolute bg-gray-900 bg-opacity-90 flex flex-col whitespace-nowrap top-12`}
      >
        {menuItem.submenu.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`${item.link === pathname ? "bg-main-red" : ""} px-5 py-3 hover:bg-main-red`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavLink;

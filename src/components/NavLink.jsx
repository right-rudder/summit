const NavLink = ({ menuItem, pathname, toggled, onShow }) => {
  const isActive = menuItem.submenu.some((item) => [item.link, item.link + "/"].includes(pathname));
  console.log(menuItem.link, pathname);
  return (
    <div className="relative">
      <a
        id={menuItem.name}
        href={menuItem.link}
        onMouseEnter={onShow}
        className={`cursor-pointer text-lg drop-shadow-md text-white py-2 hover:border-b-2 border-main-red whitespace-nowrap ${
          isActive ? "border-b-2" : ""
        }`}
      >
        {menuItem.name}
      </a>
      <div
        onMouseLeave={onShow}
        className={`overflow-hidden text-white ${
          toggled ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-200 ease-out absolute bg-gray-900 bg-opacity-90 flex flex-col whitespace-nowrap top-12`}
      >
        {menuItem.submenu.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`${[item.link, item.link + "/"].includes(pathname) ? "bg-main-red" : ""} px-5 py-3 hover:bg-main-red`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavLink;

import { FaPlus, FaMinus } from "react-icons/fa6";

const MobileNavLink = ({ menuItem, pathname, toggled, onShow }) => {
  const isActive = menuItem.submenu.some((item) => item.link === pathname);

  return (
    <div className="flex flex-col items-start">
      <button
        id={menuItem.name}
        onClick={onShow}
        className={`text-xl w-full flex items-center justify-between text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap ${
          isActive ? "bg-gray-800/90 pl-2 border-b-2" : ""
        }`}
      >
        <p className="pointer-events-none">{menuItem.name}</p>
        {toggled ? (
          <FaMinus className="mr-3 pointer-events-none" />
        ) : (
          <FaPlus className="mr-3 pointer-events-none" />
        )}
      </button>
      <ul
        className={`overflow-hidden text-white bg-gray-500/40 w-full divide-y-2 divide-white/10 ${
          toggled ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out }`}
      >
        {menuItem.submenu.map((item) => (
          <li
            key={item.name}
            className={`py-3 pl-5 w-full ${
              item.link === pathname ? "bg-main-red/70" : ""
            }`}
          >
            <a
              href={item.link}
              className={`hover:border-b-2 block w-full border-main-red text-xl ${
                item.link === pathname ? "" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavLink;

import { FaPlus, FaMinus } from "react-icons/fa6";

const MobileNavLink = ({ menuItem, pathname, toggled, onShow }) => {
  const isActive = menuItem.submenu.some((item) => item.link === pathname);

  return (
    <div className="flex flex-col items-start">
      <button
        id={menuItem.name}
        onClick={onShow}
        className={`text-xl w-full flex items-center justify-between text-white py-5 hover:border-b-2 border-main-red whitespace-nowrap ${
          isActive ? "border-b-2" : ""
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
        className={`overflow-hidden text-white ${
          toggled ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out }`}
      >
        {menuItem.submenu.map((item) => (
          <li key={item.name} className="m-4">
            <a
              href={item.link}
              className={`hover:border-b-2 border-main-red text-xl ${
                item.link === pathname ? "border-b-2" : ""
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

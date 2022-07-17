import { useDispatch, useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ColorModeInterface } from "../../Interfaces/ColorModeInterface";
import { setColorMode } from "../../features/ThemeSlice";

//assets
import { MdDarkMode } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { FcTodoList } from "react-icons/fc";
import { CgGym } from "react-icons/cg";

export const Header = () => {
  const dispatch = useDispatch();

  const isDark = useSelector((state: ColorModeInterface) => state.theme.isDark);

  const handleDarkMode = () => {
    dispatch(setColorMode());
  };

  return (
    <>
      <div
        className={`flex h-12 w-screen items-center justify-between border-b-2 border-indigo-500 px-4 shadow-lg ${
          isDark ? "bg-slate-800 text-white" : null
        }`}
      >
        <Link to={"/"}>App Logo</Link>
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
              <HiMenuAlt3 size={33} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={`absolute right-0 mt-2 w-56 origin-top-right space-y-8 rounded-md px-5 py-2 shadow-lg ${
                  isDark ? "bg-slate-700 text-white" : "bg-white text-black"
                }`}
              >
                <Menu.Item>
                  <button
                    className="flex items-center py-2"
                    onClick={handleDarkMode}
                  >
                    <MdDarkMode
                      color={`${isDark ? "#6366f1" : "orange"}`}
                      size={25}
                      className="mr-3"
                    />
                    <p>{isDark ? "Mode jour" : "Mode nuit"}</p>
                  </button>
                </Menu.Item>

                <Menu.Item>
                  <Link to={"/exercices"}>
                    <button className="flex items-center py-2">
                      <FcTodoList size={25} className="mr-3" />
                      Exercices
                    </button>
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <Link to={"/programme"}>
                    <button className="flex items-center py-2">
                      <CgGym color="#6366f1" size={25} className="mr-3" />
                      Programme
                    </button>
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};

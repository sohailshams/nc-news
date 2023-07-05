import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropDown = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          {user === null ? (
            <UserCircleIcon
              className="-mr-1 h-10 w-10 text-gray-400"
              aria-hidden="true"
            />
          ) : (
            <img
              className="h-10 w-10 rounded-full"
              src={user.avatar_url}
              alt=""
            />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {user === null ? (
              <Menu.Item>
                {({ active }) => (
                  <Link to="/signin">
                    <button
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 w-full text-left"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Sign In
                    </button>
                  </Link>
                )}
              </Menu.Item>
            ) : (
              ""
            )}
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    localStorage.clear();
                    setUser(null);
                  }}
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  Sign Out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;

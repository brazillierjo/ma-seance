import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../../features/darkModeSlice";
import { useDispatch } from "react-redux";

//assets
import { HiMenuAlt3 } from "react-icons/hi";
import { FcTodoList } from "react-icons/fc";
import { CgGym } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";

export default function Header() {
	const dipatch = useDispatch();

	return (
		<>
			<div className="flex h-16 items-center justify-between border-b-2 border-indigo-500 bg-light px-4 shadow-lg dark:bg-dark dark:text-white">
				<Link to={"/"}>
					<CgGym size={35} />
				</Link>
				<div>
					<button onClick={() => dipatch(toggleDarkMode())}>
						<CgDarkMode size={30} className="mr-6" />
					</button>
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
							<Menu.Items className="absolute right-0 z-30 mt-2 w-56 origin-top-right space-y-8 rounded-md bg-light px-5 py-2 shadow-lg dark:bg-dark dark:text-white">
								<Menu.Item>
									<Link to={"/"}>
										<button className="flex items-center py-2">
											<AiOutlineHome
												color="#4338ca"
												size={25}
												className="mr-3"
											/>
											Home
										</button>
									</Link>
								</Menu.Item>

								<Menu.Item>
									<Link to={"/exercices"}>
										<button className="flex items-center py-2">
											<FcTodoList
												size={25}
												className="mr-3"
											/>
											Exercices
										</button>
									</Link>
								</Menu.Item>

								<Menu.Item>
									<Link to={"/programme"}>
										<button className="flex items-center py-2">
											<CgGym
												color="#6366f1"
												size={25}
												className="mr-3"
											/>
											Programme
										</button>
									</Link>
								</Menu.Item>

								<Menu.Item>
									<Link to={"/agenda"}>
										<button className="flex items-center py-2">
											<BsCalendarCheck
												color="#6366f1"
												size={25}
												className="mr-3"
											/>
											Agenda
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
}

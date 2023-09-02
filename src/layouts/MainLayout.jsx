import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo 1.svg";
import { MainSideNav } from "../components/navs/sidenavs/MainSideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef, useContext } from "react";
import { AppConfigsContext } from "../serviceProviders/contexts/AppConfigsContext";
import { MainHeader } from "../components/headers/MainHeader";
import { motion, AnimatePresence } from "framer-motion";

export const MainLayout = () => {
	const navCtrlRef = useRef(null);
	const { sideNavOpen, setSideNavOpen } = useContext(AppConfigsContext);
	const toggleNav = () => {
		navCtrlRef.current.classList.toggle("rotate-180");
		setSideNavOpen(!sideNavOpen);
	};
	return (
		<div className="h-screen flex">
			<div className="w-fit h-full relative py-2 border-r border-r-gray-100 pt-5 transition-alls">
				<button
					onClick={toggleNav}
					ref={navCtrlRef}
					className="absolute -right-3 top-5 py-1 px-3 bg-slate-50 border-2 boarder-slate-100 rounded-md transition opacity-50 hover:opacity-100">
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<AnimatePresence>
					{sideNavOpen && (
						<Link
							to="."
							className="inline-block w-full">
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								className="w-36 h-24 mx-auto">
								<img
									src={logo}
									alt="logo"
									className="w-full object-contain"
								/>
							</motion.div>
						</Link>
					)}
				</AnimatePresence>
				<MainSideNav />
			</div>

			<div className="flex-1 h-full bg-gray-50 overflow-auto">
				<MainHeader />
				<Outlet />
			</div>
		</div>
	);
};

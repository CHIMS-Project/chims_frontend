import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo 1.svg";
import { MainSideNav } from "../components/navs/MainSideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef, useContext } from "react";
import { AppConfigsContext } from "../serviceProviders/contexts/AppConfigsContext";

export const MainLayout = () => {
	const navCtrlRef = useRef(null);
	const { sideNavOpen, setSideNavOpen } = useContext(AppConfigsContext);
	const toggleNav = () => {
		navCtrlRef.current.classList.toggle("rotate-180");
		setSideNavOpen(!sideNavOpen);
	};
	return (
		<div className="h-screen flex">
			<div className="w-fit h-full relative py-2 border-r border-r-gray-100">
				<button
					onClick={toggleNav}
					ref={navCtrlRef}
					className="absolute -right-3 top-5 py-1 px-3 bg-slate-50 border-2 boarder-slate-100 rounded-md transition">
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				{sideNavOpen && (
					<Link
						to="."
						className="inline-block w-full">
						<div className="w-36 h-24 mx-auto">
							<img
								src={logo}
								alt="logo"
								className="w-full object-contain"
							/>
						</div>
					</Link>
				)}
				<MainSideNav />
			</div>

			<div className="flex-1 h-full bg-gray-50">
				<Outlet />
			</div>
		</div>
	);
};

import { Outlet } from "react-router-dom";
import { useBreadCrumbs } from "../hooks/useBreadCrumbs";

export const AdmissionLayout = () => {
	const breadcrumbs = useBreadCrumbs();
	return (
		<div className="p-10 w-full max-w-screen-2xl">
			<h1 className="text-2xl mb-4 font-bold text-primary-200">
				{breadcrumbs.map((crumb, index) => {
					if (index === breadcrumbs.length - 1) {
						return crumb.charAt(0).toUpperCase() + crumb.slice(1);
					}
					return (
						crumb.charAt(0).toUpperCase() + crumb.slice(1) + " > "
					);
				})}
			</h1>

			<Outlet />
		</div>
	);
};

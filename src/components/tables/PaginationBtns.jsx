import PropTypes from "prop-types";

export const PaginationBtns = (meta, fetchBehavior) => {
    console.log(meta.meta)
	return (
		<div className="flex  mt-4 text-xs">
			{meta.meta.links.map((link) => (
				<button
					key={link.label}
					disabled={link.active}
					className={`${
						link.active && "ring-4 ring-primary-600/40"
					} bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-md mr-2`}
					onClick={() => fetchBehavior(link.url.split("/").pop())}>
					{link.label}
				</button>
			))}
		</div>
	);
};

PaginationBtns.propTypes = {
    meta: PropTypes.object,
    fetchBehavior: PropTypes.func.isRequired,
};

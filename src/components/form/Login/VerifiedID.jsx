import PropTypes from "prop-types";
import { InputField } from "../input-fields/InputField";
import { Input } from "../form-elements/Input";
import { RoundedNextBtn } from "../../buttons/RoundedNextBtn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const VerifiedID = ({ notUser }) => {
	return (
		<motion.div
			className="w-full"
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30}}>
			<div className="flex flex-col items-center justify-center mb-5 gap-2">
				<div className="w-11 h-11 rounded-full bg-slate-300"></div>
				<div className="p-1 rounded-full bg-slate-100 text-primary-500/60 ">
					<p className="px-5 font-semibold">Dr. Micheal Osborn</p>
				</div>
				<button
					className="text-xs text-slate-400 hover:bg-slate-100 rounded-full px-4 py-1"
					onClick={notUser}>
					This is not me
				</button>
			</div>

			<InputField>
				<Input
					id="password"
					type="password"
					label="Password"
				/>

				<RoundedNextBtn />
			</InputField>
			<Link
				to="."
				className="mt-10 text-center">
				Forgot password
			</Link>
		</motion.div>
	);
};

VerifiedID.propTypes = {
	notUser: PropTypes.func,
};

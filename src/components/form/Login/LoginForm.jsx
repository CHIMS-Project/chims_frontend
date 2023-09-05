import { Link } from "react-router-dom";
import { InputField } from "../input-fields/InputField";
import { Input } from "../form-elements/Input";
import { RoundedNextBtn } from "../../buttons/RoundedNextBtn";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../../../serviceProviders/contexts/AuthContext";
import profilePic from "../../../assets/images/profile-pic.jpg";
import logo from "../../../assets/images/logo 1.svg";

export const LoginForm = () => {
	const [idVerified, setIDVerified] = useState(false);
	const [verifying, setVerifying] = useState(false)
	const [loggingIn, setLoggingIn] = useState(false)
	const [staffID, setStaffID] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useContext(AuthContext);

	const verifyID = (e) => {
		e.preventDefault();

		if (staffID === "") return alert("Staff Id is required");

		setVerifying(true)
		// perform ID verification logic

		setIDVerified(true);
		setVerifying(false)
	};

	const attemptLogin = (e) => {
		e.preventDefault();
		if(password === "") return alert("Please enter your password")

		login({
			staffID: staffID,
			password: password,
		});
	};

	return (
		<div className="w-full max-w-lg p-5">
			<div className="w-full h-24 max-w-sm mx-auto mb-5">
				<img
					src={logo}
					alt="logo"
					className="w-full h-full object-contain"
				/>
			</div>
			<h1 className="font-bold text-center text-2xl text-gray-400">
				Sign in to St. Benson Hospital
			</h1>
			<form className="mt-10 w-full text-center">
				<AnimatePresence>
					{idVerified ? (
						<motion.div
							className="w-full"
							initial={{ opacity: 0, y: -30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -30 }}>
							<div className="flex flex-col items-center justify-center mb-5 gap-2">
								<div className="w-14 h-14 rounded-full bg-slate-300 overflow-hidden ring-4 ring-primary-400/20">
									<img
										src={profilePic}
										alt="profile picture"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-1 rounded-full bg-slate-100 text-primary-500/60 ">
									<p className="px-5 font-semibold">
										Dr. Micheal Osborn
									</p>
								</div>
								<button
									className="text-xs text-slate-400 hover:bg-slate-100 rounded-full px-4 py-1"
									onClick={(e) => {
										e.preventDefault();
										setIDVerified(false);
										setStaffID("");
									}}>
									This is not me
								</button>
							</div>

							<InputField>
								<Input
									id="password"
									type="password"
									label="Password"
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>

								<RoundedNextBtn onClick={attemptLogin} isLoading={loggingIn} />
							</InputField>
							<Link
								to="."
								className="mt-10 text-center">
								Forgot password
							</Link>
						</motion.div>
					) : (
						<>
							<InputField>
								<Input
									id="staffId"
									label="Staff ID"
									isRequired
									onChange={(e) => setStaffID(e.target.value)}
								/>
								<RoundedNextBtn onClick={verifyID} isLoading={verifying} />
							</InputField>
							<Link
								to="."
								className="mt-10 text-center">
								Forgot staff ID
							</Link>
						</>
					)}
				</AnimatePresence>
			</form>
		</div>
	);
};

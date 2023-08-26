import { Link } from "react-router-dom";
import { InputField } from "../input-fields/InputField";
import { Input } from "../form-elements/Input";
import { RoundedNextBtn } from "../../buttons/RoundedNextBtn";
import { useContext, useState } from "react";
// import { VerifiedID } from "./VerifiedID";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../../../serviceProviders/contexts/AuthContext";
export const LoginForm = () => {
	const [idVerified, setIDVerified] = useState(false);
	const [staffID, setStaffID] = useState("");
	const [password, setPassword] = useState("")
	const { login } = useContext(AuthContext)

	const verifyID = (e) => {
		e.preventDefault()

		if(staffID === "") return alert('Staff Id is required')
		// perform ID verification logic

		setIDVerified(true)
	}

	const attemptLogin = (e) => {
		e.preventDefault()
		// console.log('ID',staffID)
		// console.log('Password', password)

		login({
			staffID: staffID,
			password: password
		})

	}


	return (
		<div className="w-full max-w-lg p-5">
			<h1 className="font-bold text-center text-2xl text-gray-400">
				Sign in to St. Benson Hospital
			</h1>
			<form className="mt-10 w-full text-center">
				{idVerified ? (
					<AnimatePresence>
						<motion.div
							className="w-full"
							initial={{ opacity: 0, y: -30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -30 }}>
							<div className="flex flex-col items-center justify-center mb-5 gap-2">
								<div className="w-11 h-11 rounded-full bg-slate-300"></div>
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
									}}>
									This is not me
								</button>
							</div>

							<InputField>
								<Input
									id="password"
									type="password"
									label="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>

								<RoundedNextBtn onClick={attemptLogin} />
							</InputField>
							<Link
								to="."
								className="mt-10 text-center">
								Forgot password
							</Link>
						</motion.div>
					</AnimatePresence>
				) : (
					<>
						<InputField>
							<Input
								id="staffId"
								label="Staff ID"
								isRequired
								onChange={(e) => setStaffID(e.target.value)}
							/>
							<RoundedNextBtn onClick={verifyID} />
						</InputField>
						<Link
							to="."
							className="mt-10 text-center">
							Forgot staff ID
						</Link>
					</>
				)}
			</form>
		</div>
	);
};

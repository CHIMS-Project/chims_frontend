import { Link } from "react-router-dom";
import { InputField } from "../input-fields/InputField";
import { Input } from "../form-elements/Input";
import { RoundedNextBtn } from "../../buttons/RoundedNextBtn";
import { useState } from "react";
import { VerifiedID } from "./VerifiedID";
import { AnimatePresence } from "framer-motion";
export const LoginForm = () => {
	const [idVerified, setIDVerified] = useState(true);
	

	return (
		<div className="w-full max-w-lg p-5">
			<h1 className="font-bold text-center text-2xl text-gray-400">
				Sign in to St. Benson Hospital
			</h1>
			<form className="mt-10 w-full text-center">
				{idVerified ? (
					<AnimatePresence>
						<VerifiedID
							notUser={(e) => {
								e.preventDefault();
								setIDVerified(false);
							}}
						/>
					</AnimatePresence>
				) : (
					<>
						<InputField>
							<Input
								id="staffId"
								label="Staff ID"
								isRequired
							/>
							<RoundedNextBtn />
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

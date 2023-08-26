/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/**/*.{js.jsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#fde1e2",
					200: "#fbc4c4",
					300: "#f8a6a7",
					400: "#f68989",
					500: "#f46b6c",
					600: "#c35656",
					700: "#924041",
					800: "#622b2b",
					900: "#311516",
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
	],
};

import { createTheme, type MantineColorsTuple } from "@mantine/core";

const primary: MantineColorsTuple = [
	"#f0fdfa",
	"#ccfbf1",
	"#99f6e4",
	"#4defd4",
	"#2dd4bf",
	"#14b8a6",
	"#0d9488",
	"#0f766e",
	"#115e59",
	"#134e4a",
];
const secondary: MantineColorsTuple = [
	"#fff0e6",
	"#ffdec9",
	"#ffbd94",
	"#ff9a5e",
	"#ff7d30",
	"#ff6b13",
	"#ff6100",
	"#e45300",
	"#cb4900",
	"#b23d00",
];

export const theme = createTheme({
	primaryColor: "primary",
	fontFamily: '"Zain", sans-serif',
	colors: {
		primary,
		secondary,
	},
});

import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function BlankLayout() {
	return (
		<Container size="xl" className="py-4 dark:bg-gray-900 dark:text-white h-screen overflow-auto">
			<Outlet />
		</Container>
	);
}

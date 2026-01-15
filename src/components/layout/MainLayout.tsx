import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function MainLayout() {
	return (
		<Container size="xl" className="py-4 dark:bg-neutral--900 dark:text-white">
			<Outlet />
		</Container>
	);
}

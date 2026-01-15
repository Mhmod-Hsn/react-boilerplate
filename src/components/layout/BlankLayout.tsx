import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function BlankLayout() {
	return (
		<Container size="xl" className="py-4 ">
			<Outlet />
		</Container>
	);
}

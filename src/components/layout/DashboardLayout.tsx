import { Container, Grid } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
	return (
		<Container size="xl" className="py-4">
			<Header />

			<Grid>
				{/* Sidebar / Navigation */}
				<Grid.Col span={{ base: 12, md: 3 }}>
					<Sidebar />
				</Grid.Col>

				{/* Content Area */}
				<Grid.Col span={{ base: 12, md: 9 }}>
					<Outlet />
				</Grid.Col>
			</Grid>
		</Container>
	);
}

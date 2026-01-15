import { Container, Flex, Grid } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
	return (
		<>
			<Header />
			<Container>
				<Flex className="flex-col md:flex-row">
					{/* Sidebar / Navigation */}
					<div className="w-full md:w-72">
						<Sidebar />
					</div>

					{/* Content Area */}
					<div className="w-full flex-1">
						<Outlet />
					</div>
				</Flex>
			</Container>
		</>
	);
}

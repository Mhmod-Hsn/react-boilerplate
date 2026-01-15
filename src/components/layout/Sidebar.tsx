import { Group, Paper, Progress, Tabs, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../config/routes";

export function Sidebar() {
	const navigate = useNavigate();
	const location = useLocation();

	// Extract dashboard routes (assuming the first layout is the dashboard one)
	// In a real app we might want a property 'isNavigation' or similar.
	const dashboardRoutes = routes[0].children || [];
	const navigationItems = dashboardRoutes.filter((r) => r.label && r.icon);

	// Determine active tab based on current path
	const getActiveValue = () => {
		const path = location.pathname;
		if (path === "/") return "/";
		const found = navigationItems.find(
			(r) => r.path && path.includes(r.path) && r.path !== "/"
		);
		return found?.path || "/";
	};

	const activeValue = getActiveValue();

	return (
		<Paper p="md" radius="md">
			<Tabs
				value={activeValue}
				onChange={(value) => {
					if (value === "/") navigate("/");
					else navigate(value || "/");
				}}
				orientation="vertical"
				variant="pills"
				classNames={{
					list: "gap-2",
					tab: "h-auto py-3 px-4 font-medium data-[active]:bg-primary-50 data-[active]:text-primary-700 data-[active]:hover:bg-primary-100",
				}}
			>
				<Tabs.List className="w-full">
					{navigationItems.map((route) => {
						const Icon = route.icon!;
						return (
							<Tabs.Tab
								key={route.path || "index"}
								value={route.path || "/"}
								leftSection={<Icon size={20} />}
							>
								{route.label}
							</Tabs.Tab>
						);
					})}
				</Tabs.List>
			</Tabs>

			<div className="mt-8 px-4">
				<Text size="xs" fw={700} c="dimmed" tt="uppercase" mb="sm">
					System Status
				</Text>
				<div className="space-y-3">
					<div>
						<Group justify="space-between" mb={4}>
							<Text size="xs">CPU Usage</Text>
							<Text size="xs" fw={700}>
								45%
							</Text>
						</Group>
						<Progress value={45} size="sm" />
					</div>
					<div>
						<Group justify="space-between" mb={4}>
							<Text size="xs">Memory</Text>
							<Text size="xs" fw={700}>
								78%
							</Text>
						</Group>
						<Progress value={78} size="sm" color="secondary" />
					</div>
				</div>
			</div>
		</Paper>
	);
}

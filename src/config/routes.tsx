import {
	IconArchive,
	IconDashboard,
	IconSettings,
	IconUser,
} from "@tabler/icons-react";
import { Outlet } from "react-router-dom";
import { BlankLayout } from "../components/layout/BlankLayout";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { AnalyticsPanel } from "../features/analytics/AnalyticsPanel";
import { DashboardPanel } from "../features/dashboard/DashboardPanel";
import { FormsPanel } from "../features/forms/FormsPanel";
import { SettingsPanel } from "../features/settings/SettingsPanel";

export interface RouteConfig {
	path?: string;
	element?: React.ReactNode;
	label?: string;
	icon?: React.ComponentType<{ size: number }>;
	children?: RouteConfig[];
	index?: boolean;
}

export const routes: RouteConfig[] = [
	{
		element: <DashboardLayout />,
		children: [
			{
				path: "/",
				index: true,
				label: "Dashboard",
				icon: IconDashboard,
				element: <DashboardPanel />,
			},
			{
				path: "forms",
				label: "Forms & Inputs",
				icon: IconUser,
				element: <FormsPanel />,
			},
			{
				path: "analytics",
				label: "Analytics",
				icon: IconArchive,
				element: <AnalyticsPanel />,
			},
			{
				path: "settings",
				label: "Settings",
				icon: IconSettings,
				element: <SettingsPanel />,
			},
		],
	},
	{
		element: <BlankLayout />,
		children: [
			// Example of nested Blank routes
			{
				path: "task",
				element: <Outlet />,
				children: [
					{ path: "", element: <h1>Task List</h1> },
					{ path: ":id", element: <h1>Task Details</h1> },
				],
			},
		],
	},
];

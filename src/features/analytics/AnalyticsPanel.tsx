import { BarChart } from "@mantine/charts";
import {
    Group,
    Paper,
    Select,
    SimpleGrid,
    Text,
    Title
} from "@mantine/core";

// Mock data (could be passed as props or fetched)
const chartData = [
	{ date: "Mar 22", App: 2890, Website: 2338 },
	{ date: "Mar 23", App: 2756, Website: 2103 },
	{ date: "Mar 24", App: 3322, Website: 2194 },
	{ date: "Mar 25", App: 3470, Website: 2108 },
	{ date: "Mar 26", App: 3129, Website: 1726 },
];

export function AnalyticsPanel() {
	return (
		<Paper shadow="sm" radius="md" p="xl" withBorder>
			<Group justify="space-between" mb="lg">
				<Title order={3}>Performance Analytics</Title>
				<Select
					data={["Last 7 Days", "Last 30 Days", "Last Year"]}
					defaultValue="Last 7 Days"
					w={150}
				/>
			</Group>
			<BarChart
				h={300}
				data={chartData}
				dataKey="date"
				series={[
					{ name: "App", color: "primary.6" },
					{ name: "Website", color: "secondary.6" },
				]}
				tickLine="y"
			/>
			<SimpleGrid cols={3} mt="xl">
				<Paper
					p="md"
					radius="md"
					className="bg-gray-50 border border-gray-100 text-center"
				>
					<Text size="xs" c="dimmed" tt="uppercase" fw={700}>
						Total Visits
					</Text>
					<Text size="xl" fw={900} className="text-primary-600">
						89,203
					</Text>
				</Paper>
				<Paper
					p="md"
					radius="md"
					className="bg-gray-50 border border-gray-100 text-center"
				>
					<Text size="xs" c="dimmed" tt="uppercase" fw={700}>
						Bounce Rate
					</Text>
					<Text size="xl" fw={900} className="text-red-500">
						42.5%
					</Text>
				</Paper>
				<Paper
					p="md"
					radius="md"
					className="bg-gray-50 border border-gray-100 text-center"
				>
					<Text size="xs" c="dimmed" tt="uppercase" fw={700}>
						Avg. Session
					</Text>
					<Text size="xl" fw={900} className="text-secondary-600">
						4m 12s
					</Text>
				</Paper>
			</SimpleGrid>
		</Paper>
	);
}

import { AreaChart } from "@mantine/charts";
import {
    ActionIcon,
    Badge,
    Card,
    ColorSwatch,
    Grid,
    Group,
    Paper,
    SimpleGrid,
    Text,
    Timeline,
} from "@mantine/core";
import {
    IconBrandReact,
    IconBulb,
    IconGitBranch,
    IconGitCommit,
    IconGitPullRequest,
    IconUser,
} from "@tabler/icons-react";

// Mock data for charts
const chartData = [
	{ date: "Mar 22", App: 2890, Website: 2338 },
	{ date: "Mar 23", App: 2756, Website: 2103 },
	{ date: "Mar 24", App: 3322, Website: 2194 },
	{ date: "Mar 25", App: 3470, Website: 2108 },
	{ date: "Mar 26", App: 3129, Website: 1726 },
];

export function DashboardPanel() {
	return (
		<>
			<SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mb="lg">
				<Card shadow="sm" radius="md" withBorder padding="lg">
					<Group justify="space-between">
						<Text size="xs" c="dimmed" fw={700} tt="uppercase">
							Revenue
						</Text>
						<ActionIcon variant="light" radius="xl">
							<IconBrandReact size={18} />
						</ActionIcon>
					</Group>
					<Text fw={700} size="xl" mt="sm">
						$14,230
					</Text>
					<Badge variant="light" mt="xs">
						+12% vs last month
					</Badge>
				</Card>

				<Card shadow="sm" radius="md" withBorder padding="lg">
					<Group justify="space-between">
						<Text size="xs" c="dimmed" fw={700} tt="uppercase">
							New Users
						</Text>
						<ActionIcon variant="light" radius="xl">
							<IconUser size={18} />
						</ActionIcon>
					</Group>
					<Text fw={700} size="xl" mt="sm">
						2,540
					</Text>
					<Group gap={5} mt="xs">
						<ColorSwatch color="var(--mantine-color-primary-5)" size={10} />
						<Text size="xs" c="dimmed">
							Active recently
						</Text>
					</Group>
				</Card>

				<Card shadow="sm" radius="md" withBorder padding="lg">
					<Group justify="space-between">
						<Text size="xs" c="dimmed" fw={700} tt="uppercase">
							Updates
						</Text>
						<ActionIcon color="secondary" variant="light" radius="xl">
							<IconBulb size={18} />
						</ActionIcon>
					</Group>
					<Text fw={700} size="xl" mt="sm">
						v7.2.4
					</Text>
					<Badge color="secondary" variant="light" mt="xs">
						Patch Available
					</Badge>
				</Card>
			</SimpleGrid>

			<Grid gutter="lg">
				<Grid.Col span={{ base: 12, md: 8 }}>
					<Paper shadow="sm" radius="md" p="md" withBorder>
						<Text fw={700} mb="md">
							Traffic Overview (Mantine Charts)
						</Text>
						<AreaChart
							h={300}
							data={chartData}
							dataKey="date"
							series={[
								{ name: "App", color: "primary.6" },
								{ name: "Website", color: "secondary.6" },
							]}
							curveType="monotone"
						/>
					</Paper>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Paper shadow="sm" radius="md" p="md" withBorder h="100%">
						<Text fw={700} mb="md">
							Timeline
						</Text>
						<Timeline active={1} bulletSize={24} lineWidth={2}>
							<Timeline.Item
								bullet={<IconGitBranch size={12} />}
								title="New Branch"
							>
								<Text c="dimmed" size="xs">
									2 hours ago
								</Text>
							</Timeline.Item>
							<Timeline.Item
								bullet={<IconGitCommit size={12} />}
								title="Commit"
							>
								<Text c="dimmed" size="xs">
									52 mins ago
								</Text>
							</Timeline.Item>
							<Timeline.Item
								title="Pull Request"
								bullet={<IconGitPullRequest size={12} />}
								lineVariant="dashed"
							>
								<Text c="dimmed" size="xs">
									Pending review
								</Text>
							</Timeline.Item>
						</Timeline>
					</Paper>
				</Grid.Col>
			</Grid>
		</>
	);
}

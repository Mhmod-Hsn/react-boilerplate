import {
	Badge,
	Button,
	Card,
	Container,
	Grid,
	Group,
	Paper,
	Text,
	Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconBrandMantine, IconBrandTailwind } from "@tabler/icons-react";

function App() {
	return (
		<Container size="lg" className="py-10">
			<div className="text-center mb-10">
				<Title order={1} className="text-4xl font-extrabold mb-4">
					<span className="text-blue-600">Vite</span> +
					<span className="text-teal-500 mx-2">Tailwind v4</span> +
					<span className="text-blue-500">Mantine</span>
				</Title>
				<Text c="dimmed" size="lg">
					A powerful boilerplate ready for your next project.
				</Text>
			</div>

			<Grid gutter="xl">
				<Grid.Col span={{ base: 12, md: 6 }}>
					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Card.Section className="bg-gray-50 p-4 border-b border-gray-100">
							<Group justify="space-between">
								<Badge color="pink" variant="light">
									Component Demo
								</Badge>
								<IconBrandMantine size={20} className="text-blue-500" />
							</Group>
						</Card.Section>

						<Group justify="space-between" mt="md" mb="xs">
							<Text fw={500}>Mantine Components</Text>
							<Badge color="blue" variant="light">
								Ready
							</Badge>
						</Group>

						<Text size="sm" c="dimmed">
							This card uses Mantine components (`Card`, `Group`, `Badge`,
							`Text`) styled with Mantine props, while the layout is handled by
							a mix of Mantine's Grid and Tailwind's utility classes.
						</Text>

						<Button color="blue" fullWidth mt="md" radius="md">
							Mantine Button
						</Button>
					</Card>
				</Grid.Col>

				<Grid.Col span={{ base: 12, md: 6 }}>
					<Paper
						shadow="md"
						p="xl"
						radius="md"
						withBorder
						className="h-full flex flex-col justify-center items-center bg-slate-50"
					>
						<IconBrandTailwind size={48} className="text-teal-500 mb-4" />
						<div className="text-center">
							<h3 className="text-xl font-bold text-gray-800">
								Tailwind CSS v4
							</h3>
							<p className="text-gray-500 mt-2">
								Tailwind classes are working alongside Mantine styles without
								conflict.
							</p>
							<div className="mt-4 flex gap-2 justify-center">
								<span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
									Utility First
								</span>
								<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
									Responsive
								</span>
							</div>
						</div>
					</Paper>
				</Grid.Col>

				<Grid.Col span={{ base: 12, md: 6 }}>
					<Paper
						shadow="xs"
						p="xl"
						withBorder
						className="flex flex-col items-center"
					>
						<Text fw={700} mb="md">
							Date Picker Integration
						</Text>
						<DatePicker />
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
	);
}

export default App;

import {
    Button,
    Grid,
    Group,
    NumberInput,
    Paper,
    SegmentedControl,
    Select,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";

export function FormsPanel() {
	const openModal = () => {
		modals.openConfirmModal({
			title: "Please confirm your action",
			children: (
				<Text size="sm">
					This is a confirm modal from @mantine/modals. It works seamlessly
					without managing local state for simple confirmations.
				</Text>
			),
			labels: { confirm: "Confirm", cancel: "Cancel" },
			onConfirm: () =>
				notifications.show({ message: "Confirmed!", color: "green" }),
		});
	};

	return (
		<Paper shadow="sm" radius="md" p="xl" withBorder>
			<Title order={3} mb="lg">
				User Settings Form
			</Title>
			<Grid>
				<Grid.Col span={6}>
					<TextInput label="First Name" placeholder="John" mb="md" />
				</Grid.Col>
				<Grid.Col span={6}>
					<TextInput label="Last Name" placeholder="Doe" mb="md" />
				</Grid.Col>
				<Grid.Col span={12}>
					<Select
						label="Role"
						placeholder="Pick one"
						data={["Administrator", "Editor", "Viewer"]}
						mb="md"
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<NumberInput label="Age" defaultValue={25} mb="md" />
				</Grid.Col>
				<Grid.Col span={6}>
					<DatePickerInput label="Join Date" placeholder="Pick date" mb="md" />
				</Grid.Col>
				<Grid.Col span={12}>
					<Text size="sm" fw={500} mb={4}>
						Notifications
					</Text>
					<SegmentedControl
						data={[
							{ label: "All", value: "all" },
							{ label: "Direct Mentions", value: "mentions" },
							{ label: "None", value: "none" },
						]}
						fullWidth
						mb="md"
					/>
				</Grid.Col>
				<Grid.Col span={12}>
					<Group
						justify="space-between"
						align="center"
						mt="md"
						p="md"
						className="bg-neutral--50 rounded-lg border border-gray-100"
					>
						<div>
							<Text fw={500}>Dangerous Area</Text>
							<Text size="xs" c="dimmed">
								Delete account and data
							</Text>
						</div>
						<Button color="red" variant="subtle" onClick={openModal}>
							Delete Account
						</Button>
					</Group>
				</Grid.Col>
			</Grid>
		</Paper>
	);
}

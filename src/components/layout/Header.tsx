import { Button, Group, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
	IconBrandMantine,
	IconCheck,
	IconGitBranch,
	IconMessageDots,
} from "@tabler/icons-react";

export function Header() {
	const showNotification = () => {
		notifications.show({
			title: "Notification System",
			message: "This is a notification from @mantine/notifications",
			icon: <IconCheck size={18} />,
		});
	};

	return (
		<div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
			<div>
				<Title
					order={1}
					className="text-3xl font-extrabold flex items-center gap-3"
				>
					<IconBrandMantine size={32} className="text-primary-600" />
					<span>Dashboard</span>
				</Title>
			</div>
			<Group>
				<Button
					variant="light"
					leftSection={<IconMessageDots size={16} />}
					onClick={showNotification}
				>
					Test Notification
				</Button>
				<Button
					leftSection={<IconGitBranch size={16} />}
					component="a"
					href="https://github.com/mantinedev/mantine"
					target="_blank"
				>
					GitHub
				</Button>
			</Group>
		</div>
	);
}

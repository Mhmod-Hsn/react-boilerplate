import { Code, Group, Paper, Slider, Switch, Text, Title } from "@mantine/core";
import { useState } from "react";

export function SettingsPanel() {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => setDarkMode((prev) => !prev);

	const [notifications, setNotifications] = useState(true);
	const toggleNotifications = () => setNotifications((prev) => !prev);

	const [volume, setVolume] = useState(40);

	return (
		<Paper shadow="sm" radius="md" p="xl" withBorder>
			<Title order={3} mb="md">
				Application Preferences
			</Title>
			<div className="space-y-6">
				<Group justify="space-between">
					<div>
						<Text fw={500}>Dark Mode</Text>
						<Text size="sm" c="dimmed">
							Switch between light and dark themes
						</Text>
					</div>
					<Switch
						size="lg"
						onLabel="ON"
						offLabel="OFF"
						checked={darkMode}
						onChange={toggleDarkMode}
					/>
				</Group>

				<Group justify="space-between">
					<div>
						<Text fw={500}>Email Notifications</Text>
						<Text size="sm" c="dimmed">
							Receive digest emails weekly
						</Text>
					</div>
					<Switch
						size="lg"
						defaultChecked
						checked={notifications}
						onChange={toggleNotifications}
					/>
				</Group>

				<div>
					<Text fw={500} mb="xs">
						Volume Control
					</Text>
					<Slider
						value={volume}
						onChange={(value) => setVolume(value)}
						marks={[
							{ value: 20, label: "20%" },
							{ value: 50, label: "50%" },
							{ value: 80, label: "80%" },
						]}
					/>
				</div>

				<div className="pt-4 border-t border-gray-100">
					<Code block lang="json">
						{`// Configuration (JSON)
{
  "theme": ${darkMode ? "dark" : "light"},
  "notifications": ${notifications ? "true" : "false"},
  "volume": ${volume}
}`}
					</Code>
				</div>
			</div>
		</Paper>
	);
}

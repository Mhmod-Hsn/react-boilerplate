import {
	Button,
	Card,
	Checkbox,
	Group,
	Stack,
	Text,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconTrash } from "@tabler/icons-react";
import {
	useCreateTodoMutation,
	useDeleteTodoMutation,
	useGetTodosQuery,
	useUpdateTodoMutation,
} from "../services/todos";

export function TodosDemo() {
	const { data: todos, isLoading, error } = useGetTodosQuery();
	const { mutateAsync: createTodo, isPending: createTodoPending } =
		useCreateTodoMutation();
	const { mutateAsync: updateTodo, isPending: updateTodoPending } =
		useUpdateTodoMutation();
	const { mutateAsync: deleteTodo, isPending: deleteTodoPending } =
		useDeleteTodoMutation();

	const form = useForm({
		initialValues: {
			title: "",
		},
	});

	const handleSubmit = async (values: { title: string }) => {
		await createTodo({
			userId: 1,
			title: values.title,
			completed: false,
		});
		notifications.show({
			title: "Todo created",
			message: values.title,
			color: "green",
		});
		form.reset();
	};

	const handleDelete = async (id: string, title: string) => {
		await deleteTodo(id);
		notifications.show({
			title: "Todo deleted",
			message: title,
			color: "red",
		});
	};

	if (isLoading) return <Text>Loading todos...</Text>;
	if (error) return <Text c="red">Error loading todos</Text>;

	return (
		<Stack gap="md" p="md">
			<Title order={2}>Todos Demo</Title>

			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Group align="flex-end">
					<TextInput
						label="New Todo"
						placeholder="Enter todo title"
						{...form.getInputProps("title")}
						disabled={createTodoPending}
					/>
					<Button
						type="submit"
						loading={createTodoPending}
						disabled={form.values.title.trim() === ""}
					>
						Add Todo
					</Button>
				</Group>
			</form>

			<Stack gap="xs">
				{todos?.length ? todos?.map((todo) => (
					<Card key={todo.id} withBorder padding="sm">
						<Group justify="space-between">
							<Group>
								<Checkbox
									checked={todo.completed}
									onChange={(event) =>
										updateTodo({
											id: todo.id,
											completed: event.currentTarget.checked,
										})
									}
									disabled={updateTodoPending}
								/>
								<Text td={todo.completed ? "line-through" : undefined}>
									{todo.title}
								</Text>
							</Group>
							<Button
								color="red"
								variant="subtle"
								size="xs"
								onClick={async () => handleDelete(todo.id, todo.title)}
								loading={deleteTodoPending}
							>
								<IconTrash size={16} />
							</Button>
						</Group>
					</Card>
				)) : <Text c="dimmed">No todos</Text>}
			</Stack>
		</Stack>
	);
}

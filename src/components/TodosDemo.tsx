import { Button, Card, Checkbox, Group, Stack, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconTrash } from "@tabler/icons-react";
import { useCreateTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from "../services/todos";

export function TodosDemo() {
  const { data: todos, isLoading, error } = useGetTodosQuery();
  const createTodo = useCreateTodoMutation();
  const updateTodo = useUpdateTodoMutation();
  const deleteTodo = useDeleteTodoMutation();

  const form = useForm({
    initialValues: {
      title: "",
    },
  });

  const handleSubmit = (values: { title: string }) => {
    createTodo.mutate({
      userId: 1,
      title: values.title,
      completed: false,
    });
    form.reset();
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
            disabled={createTodo.isPending}
          />
          <Button type="submit" loading={createTodo.isPending}>
            Add Todo
          </Button>
        </Group>
      </form>

      <Stack gap="xs">
        {todos?.slice(0, 5).map((todo) => (
          <Card key={todo.id} withBorder padding="sm">
            <Group justify="space-between">
              <Group>
                <Checkbox
                  checked={todo.completed}
                  onChange={(event) => updateTodo.mutate({
                    id: todo.id,
                    completed: event.currentTarget.checked
                  })}
                  disabled={updateTodo.isPending}
                />
                <Text td={todo.completed ? "line-through" : undefined}>
                  {todo.title}
                </Text>
              </Group>
              <Button 
                color="red" 
                variant="subtle" 
                size="xs"
                onClick={() => deleteTodo.mutate(todo.id)}
                loading={deleteTodo.isPending}
              >
                <IconTrash size={16} />
              </Button>
            </Group>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}

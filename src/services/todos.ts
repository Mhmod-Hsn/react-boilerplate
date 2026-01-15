import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UUID } from '../utils/functions';

const MOCK_TODOS = [
  { id: UUID(), title: 'Todo 1', completed: false, userId: 1 },
  { id: UUID(), title: 'Todo 2', completed: false, userId: 1 },
  { id: UUID(), title: 'Todo 3', completed: false, userId: 1 },
];
const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return MOCK_TODOS;
};
const getTodo = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return MOCK_TODOS.find((t) => t.id === id);
};
const createTodo = async (todo: CreateTodoInput) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  MOCK_TODOS.push({
    id: UUID(),
    ...todo,
  });
  return MOCK_TODOS;
};
const updateTodo = async (todo: UpdateTodoInput) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const index = MOCK_TODOS.findIndex((t) => t.id === todo.id);
  if (index === -1) return MOCK_TODOS;
  MOCK_TODOS[index] = {
    ...MOCK_TODOS[index],
    ...todo,
  };
  return MOCK_TODOS;
};
const deleteTodo = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  MOCK_TODOS.splice(MOCK_TODOS.findIndex((t) => t.id === id), 1);
  return MOCK_TODOS;
};

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface CreateTodoInput {
  userId: number;
  title: string;
  completed: boolean;
}

export interface UpdateTodoInput extends Partial<CreateTodoInput> {
  id: string;
}

// Queries
export const useGetTodosQuery = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
    // queryFn: () => apiClient.get<Todo[]>('/todos'),
  });
};

export const useGetTodoQuery = (id: string) => {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => getTodo(id),
    // queryFn: () => apiClient.get<Todo>(`/todos/${id}`),
    enabled: !!id,
  });
};

// Mutations
export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // mutationFn: (newTodo: CreateTodoInput) => 
    //   apiClient.post<Todo>('/todos', newTodo),
    mutationFn: (newTodo: CreateTodoInput) => createTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // mutationFn: ({ id, ...data }: UpdateTodoInput) => 
    //   apiClient.put<Todo>(`/todos/${id}`, data),
    mutationFn: ({ id, ...data }: UpdateTodoInput) => updateTodo({ id, ...data }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.invalidateQueries({ queryKey: ['todos', variables.id] });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // mutationFn: (id: number) => apiClient.delete(`/todos/${id}`),
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

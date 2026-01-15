import { Box, Button, Group, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { z } from "zod";

const schema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid email" }),
	age: z.number().min(18, { message: "You must be at least 18 to register" }),
});

export function ZodFormExample() {
	const form = useForm({
		initialValues: {
			email: "",
			age: 18,
		},
		validate: zod4Resolver(schema),
	});

	return (
		<Box maw={340} mx="auto">
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<TextInput
					withAsterisk
					label="Email"
					placeholder="your@email.com"
					{...form.getInputProps("email")}
					error={form.errors.email}
				/>
				<NumberInput
					withAsterisk
					label="Age"
					placeholder="18"
					mt="md"
					{...form.getInputProps("age")}
					error={form.errors.age}
				/>

				<Group justify="flex-end" mt="md">
					<Button type="submit">Submit</Button>
				</Group>
			</form>
		</Box>
	);
}

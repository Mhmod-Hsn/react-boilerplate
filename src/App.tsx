import { Button, Container, Text } from "@mantine/core";

function App() {
	return (
		<Container size="lg" className="p-4 md:p-10 ">
			<Text className="font-extrabold text-3xl text-primary-600">
				Hello World (Zain Font)
			</Text>
			<Text className="font-bold text-xl text-secondary-600">
				Secondary Color Test
			</Text>
			<div className="mt-4 space-y-2">
				<Text fw={300} className="text-xl">
					Light 300 (Mantine Prop)
				</Text>
				<Text className="font-light text-xl">Light 300 (Tailwind Class)</Text>
				<Text fw={900} className="text-4xl">
					Black 900 (Mantine Prop)
				</Text>
				<Text className="font-black text-4xl">Black 900 (Tailwind Class)</Text>
				<Text>
					ولما كان تناسي حقوق الإنسان وازدراؤها قد أفضيا إلى أعمال همجية
        </Text>
        <Button variant="outline">Button</Button>
			</div>
		</Container>
	);
}

export default App;

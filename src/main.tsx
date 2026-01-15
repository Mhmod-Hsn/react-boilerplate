import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import React from "react";
// Zain Font Imports (Moved to index.html via Google Fonts)

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { theme } from "./styles/theme.ts";

// Mantine Styles
// Mantine CSS imports moved to index.css for precedence control
import "./styles/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme} forceColorScheme="dark">
				<Notifications />
				<ModalsProvider>
					<App />
				</ModalsProvider>
			</MantineProvider>
		</QueryClientProvider>
	</React.StrictMode>
);

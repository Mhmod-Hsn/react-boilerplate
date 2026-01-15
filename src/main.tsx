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
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider theme={theme} forceColorScheme="dark">
			<Notifications />
			<ModalsProvider>
				<App />
			</ModalsProvider>
		</MantineProvider>
	</React.StrictMode>
);

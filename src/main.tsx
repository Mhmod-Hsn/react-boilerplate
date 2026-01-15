import { MantineProvider } from "@mantine/core";
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
		<MantineProvider theme={theme}>
			<div className="dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800 dark:border h-screen overflow-auto">
				<App />
			</div>
		</MantineProvider>
	</React.StrictMode>
);

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
			<div>
				<App />
			</div>
		</MantineProvider>
	</React.StrictMode>
);

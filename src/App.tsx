import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes, type RouteConfig } from "./config/routes";

const renderRoutes = (routes: RouteConfig[]) => {
	return routes.map((route, index) => {
		const { children, ...rest } = route;

		// TS Discriminates between PathRouteProps and LayoutRouteProps/IndexRouteProps
		// We need to cast or split. Spreading is convenient but strict.
		if (route.index) {
			return <Route key={index} index element={route.element} />;
		}

		return (
			<Route key={index} path={rest.path} element={rest.element}>
				{children && renderRoutes(children)}
			</Route>
		);
	});
};

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				{renderRoutes(routes)}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

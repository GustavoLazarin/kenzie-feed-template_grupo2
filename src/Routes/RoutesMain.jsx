import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AllNewsPage } from "../pages/AllNewsPage";
import { SinglePage } from "../pages/SinglePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { EditPostPage } from "../pages/EditPostPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useNewsContext } from "../providers/NewsContext";

export const RoutesMain = () => {
	const { editingPost } = useNewsContext();
	const navigate = useNavigate()

	return (
		<Routes>
			<Route element={<PublicRoutes />}>
				<Route path="/news" element={<AllNewsPage />} />
				<Route path="/news/:id" element={<SinglePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>

			<Route path="/" element={<HomePage />} />

			<Route element={<PrivateRoutes />}>
				<Route path="/dashboard" element={<DashboardPage />} />
				{editingPost? <Route path="/edit/:id" element={<EditPostPage />} />: navigate("/dashboard")}
			</Route>
		</Routes>
	);
};

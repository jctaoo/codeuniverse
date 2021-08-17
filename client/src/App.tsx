import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  ContainerAdminPage,
  ContainerListPage,
  DashboardPage,
  HomePage,
  LoginPage,
  NotfoundPage,
  PreferencesAdminPage,
  PreferencesPage,
  ProjectAdminPage,
  ProjectListPage,
  UserAdminPage,
  UserPage,
} from "./pages";
import { theme } from "./theme";
import "./styles/base.css";
import { AdminLayout, MainLayout } from "./layouts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/containers" element={<ContainerListPage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
      </Route>
      <Route path="/admin" element={<MainLayout subLayout={AdminLayout} />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UserAdminPage />} />
        <Route path="/projects" element={<ProjectAdminPage />} />
        <Route path="/containers" element={<ContainerAdminPage />} />
        <Route path="/preferences" element={<PreferencesAdminPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export { App };

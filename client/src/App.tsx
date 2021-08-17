import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdminPage,
  HomePage,
  LoginPage,
  NotfoundPage,
  PreferencesPage,
} from "./pages";
import { NavBar } from "./components";
import { theme } from "./theme";
import "./base.css";
import { MainLayout } from "./layouts";

function App() {
  return (
    <div id="app">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/preferences" element={<PreferencesPage />} />
            </Route>
            <Route path="admin" element={<MainLayout admin />}></Route>
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export { App };

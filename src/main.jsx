import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Utils/theme.js";
import DashboardPage from "./Pages/Dashboard/DashboardPage.jsx";
import TeamPage from "./Pages/Team/TeamPage.jsx";
import ContactsPage from "./Pages/Contacts/ContactsPage.jsx";
import InvoicesPage from "./Pages/Invoices/InvoicesPage.jsx";
import FormPage from "./Pages/Form/FormPage.jsx";
import CalendarPage from "./Pages/Calendar/CalendarPage.jsx";
import FAQPage from "./Pages/FAQ/FAQPage.jsx";
import BarChartPage from "./Pages/BarChart/BarChartPage.jsx";
import PieChartPage from "./Pages/PieChart/PieChartPage.jsx";
import LineChartPage from "./Pages/LineChart/LineChartPage.jsx";
import GeographyPage from "./Pages/Geography/GeographyPage.jsx";
import NotFoundPage from "./Pages/NotFound/NotFoundPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<DashboardPage />} />
      <Route path="team" element={<TeamPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="invoices" element={<InvoicesPage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="faq" element={<FAQPage />} />
      <Route path="bar" element={<BarChartPage />} />
      <Route path="pie" element={<PieChartPage />} />
      <Route path="line" element={<LineChartPage />} />
      <Route path="geography" element={<GeographyPage />} />
  
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeProvider>
);

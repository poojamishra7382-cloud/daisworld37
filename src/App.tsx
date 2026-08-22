import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import CountryDetailPage from '@/pages/CountryDetailPage';
import ContactPage from '@/pages/ContactPage';
import AdminPage from '@/pages/AdminPage';
import ClienterPage from "./pages/ClienterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServiceDetailPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/country" element={<CountryDetailPage />} />
          <Route path="/country/:slug" element={<CountryDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/clients" element={<ClienterPage />} />
          <Route path="/apply" element={<HomePage />} />
          <Route path="/apply-now" element={<HomePage />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

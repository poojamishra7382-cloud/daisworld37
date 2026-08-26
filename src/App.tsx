import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import VacanciesPage from '@/pages/VacanciesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import CountryDetailPage from '@/pages/CountryDetailPage';
import ContactPage from '@/pages/ContactPage';
import AdminPage from '@/pages/AdminPage';
import ClienterPage from "./pages/ClienterPage";
import ApplyPage from '@/pages/ApplyPage';
import DoctorsPhysiciansPage from '@/pages/healthcare/DoctorsPhysiciansPage';
import NursingPage from '@/pages/healthcare/NursingPage';
import PharmacyPage from '@/pages/healthcare/PharmacyPage';
import MedicalLaboratoryPage from '@/pages/healthcare/MedicalLaboratoryPage';
import AlliedHealthWellnessPage from '@/pages/healthcare/AlliedHealthWellnessPage';
import FrontOfficePage from '@/pages/hospitality/FrontOfficePage';
import HousekeepingPage from '@/pages/hospitality/HousekeepingPage';
import FoodAndBeveragePage from '@/pages/hospitality/FoodAndBeveragePage';
import KitchenCulinaryPage from '@/pages/hospitality/KitchenCulinaryPage';
import SalesAndEventsPage from '@/pages/hospitality/SalesAndEventsPage';
import CivilStructuralPage from '@/pages/construction/CivilStructuralPage';
import ElectricalPage from '@/pages/construction/ElectricalPage';
import PlumbingHvacPage from '@/pages/construction/PlumbingHvacPage';
import SiteManagementSafetyPage from '@/pages/construction/SiteManagementSafetyPage';
import SkilledTradesFinishingPage from '@/pages/construction/SkilledTradesFinishingPage';
import ExplorationGeologyPage from '@/pages/oil-and-gas/ExplorationGeologyPage';
import DrillingWellOperationsPage from '@/pages/oil-and-gas/DrillingWellOperationsPage';
import ProductionOperationsPage from '@/pages/oil-and-gas/ProductionOperationsPage';
import MaintenanceEngineeringPage from '@/pages/oil-and-gas/MaintenanceEngineeringPage';
import HseSafetyPage from '@/pages/oil-and-gas/HseSafetyPage';
import HairStylingPage from '@/pages/beauty-and-care/HairStylingPage';
import SkinAestheticsPage from '@/pages/beauty-and-care/SkinAestheticsPage';
import NailBeautyPage from '@/pages/beauty-and-care/NailBeautyPage';
import SpaWellnessPage from '@/pages/beauty-and-care/SpaWellnessPage';
import MakeupBridalPage from '@/pages/beauty-and-care/MakeupBridalPage';
import { LanguageProvider } from '@/context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vacancies" element={<VacanciesPage />} />

            {/* Healthcare Multi-Page Routes */}
            <Route path="/services" element={<Navigate to="/services/healthcare/doctors-physicians" replace />} />
            <Route path="/services/healthcare" element={<Navigate to="/services/healthcare/doctors-physicians" replace />} />
            <Route path="/services/healthcare/doctors-physicians" element={<DoctorsPhysiciansPage />} />
            <Route path="/services/healthcare/nursing" element={<NursingPage />} />
            <Route path="/services/healthcare/pharmacy" element={<PharmacyPage />} />
            <Route path="/services/healthcare/medical-laboratory" element={<MedicalLaboratoryPage />} />
            <Route path="/services/healthcare/allied-health-wellness" element={<AlliedHealthWellnessPage />} />

            {/* Hospitality Multi-Page Routes */}
            <Route path="/services/hospitality" element={<Navigate to="/services/hospitality/front-office" replace />} />
            <Route path="/services/hospitality/front-office" element={<FrontOfficePage />} />
            <Route path="/services/hospitality/housekeeping" element={<HousekeepingPage />} />
            <Route path="/services/hospitality/food-and-beverage" element={<FoodAndBeveragePage />} />
            <Route path="/services/hospitality/kitchen-culinary" element={<KitchenCulinaryPage />} />
            <Route path="/services/hospitality/sales-and-events" element={<SalesAndEventsPage />} />

            {/* Construction Multi-Page Routes */}
            <Route path="/services/construction" element={<Navigate to="/services/construction/civil-structural" replace />} />
            <Route path="/services/construction/civil-structural" element={<CivilStructuralPage />} />
            <Route path="/services/construction/electrical" element={<ElectricalPage />} />
            <Route path="/services/construction/plumbing-hvac" element={<PlumbingHvacPage />} />
            <Route path="/services/construction/site-management-safety" element={<SiteManagementSafetyPage />} />
            <Route path="/services/construction/skilled-trades-finishing" element={<SkilledTradesFinishingPage />} />

            {/* Oil & Gas Multi-Page Routes */}
            <Route path="/services/oil-and-gas" element={<Navigate to="/services/oil-and-gas/exploration-geology" replace />} />
            <Route path="/services/oil-and-gas/exploration-geology" element={<ExplorationGeologyPage />} />
            <Route path="/services/oil-and-gas/drilling-well-operations" element={<DrillingWellOperationsPage />} />
            <Route path="/services/oil-and-gas/production-operations" element={<ProductionOperationsPage />} />
            <Route path="/services/oil-and-gas/maintenance-engineering" element={<MaintenanceEngineeringPage />} />
            <Route path="/services/oil-and-gas/hse-safety" element={<HseSafetyPage />} />

            {/* Beauty & Care Multi-Page Routes */}
            <Route path="/services/beauty-and-care" element={<Navigate to="/services/beauty-and-care/hair-styling" replace />} />
            <Route path="/services/beauty-and-care/hair-styling" element={<HairStylingPage />} />
            <Route path="/services/beauty-and-care/skin-aesthetics" element={<SkinAestheticsPage />} />
            <Route path="/services/beauty-and-care/nail-beauty" element={<NailBeautyPage />} />
            <Route path="/services/beauty-and-care/spa-wellness" element={<SpaWellnessPage />} />
            <Route path="/services/beauty-and-care/makeup-bridal" element={<MakeupBridalPage />} />

            {/* General Services Fallback Route */}
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            <Route path="/country" element={<CountryDetailPage />} />
            <Route path="/country/:slug" element={<CountryDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/clients" element={<ClienterPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/apply-now" element={<ApplyPage />} />
          </Route>
          {/* Standalone Shareable Form Routes (Google-Form style link) */}
          <Route path="/form" element={<ApplyPage />} />
          <Route path="/register" element={<ApplyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

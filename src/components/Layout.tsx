import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplyNowModal from '@/components/ApplyNowModal';
import AnnouncementPopup from '@/components/AnnouncementPopup';
import ScrollToTop from '@/components/ScrollToTop';
import ChatbotWidget from '@/components/ChatbotWidget';

export default function Layout() {
  const [applyOpen, setApplyOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to custom DOM events
  useEffect(() => {
    const handler = () => setApplyOpen(true);
    window.addEventListener('open-apply-modal', handler);
    return () => window.removeEventListener('open-apply-modal', handler);
  }, []);

  // Detect direct apply links (route /apply, /apply-now, query ?apply=..., or hash #apply)
  useEffect(() => {
    const path = location.pathname.toLowerCase().replace(/\/$/, '');
    const searchParams = new URLSearchParams(location.search);
    const hasApplyQuery =
      searchParams.get('apply') === 'true' ||
      searchParams.get('apply') === 'now' ||
      searchParams.get('apply') === '1' ||
      searchParams.has('apply');
    const isApplyPath = path === '/apply' || path === '/apply-now';
    const isApplyHash =
      location.hash === '#apply' || location.hash === '#apply-now';

    if (isApplyPath || hasApplyQuery || isApplyHash) {
      setApplyOpen(true);
    }
  }, [location.pathname, location.search, location.hash]);

  const handleClose = () => {
    setApplyOpen(false);
    const path = location.pathname.toLowerCase().replace(/\/$/, '');
    const searchParams = new URLSearchParams(location.search);
    const isApplyPath = path === '/apply' || path === '/apply-now';
    const hasApplyQuery = searchParams.has('apply');
    const isApplyHash =
      location.hash === '#apply' || location.hash === '#apply-now';

    if (isApplyPath) {
      navigate('/', { replace: true });
    } else if (hasApplyQuery) {
      searchParams.delete('apply');
      const newQuery = searchParams.toString();
      navigate(
        location.pathname + (newQuery ? `?${newQuery}` : '') + location.hash,
        { replace: true }
      );
    } else if (isApplyHash) {
      navigate(location.pathname + location.search, { replace: true });
    }
  };

  return (
    <>
      <ScrollToTop />
      <Navbar onApplyClick={() => setApplyOpen(true)} />
      <main className="flex-1 w-full max-w-full">
        <Outlet />
      </main>
      <Footer />
      <ApplyNowModal open={applyOpen} onClose={handleClose} />
      <AnnouncementPopup onApplyClick={() => setApplyOpen(true)} />
      <ChatbotWidget />
    </>
  );
}

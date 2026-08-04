import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplyNowModal from '@/components/ApplyNowModal';
import ScrollToTop from '@/components/ScrollToTop';
import ChatbotWidget from '@/components/ChatbotWidget';

export default function Layout() {
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    const handler = () => setApplyOpen(true);
    window.addEventListener('open-apply-modal', handler);
    return () => window.removeEventListener('open-apply-modal', handler);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar onApplyClick={() => setApplyOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ApplyNowModal open={applyOpen} onClose={() => setApplyOpen(false)} />
      <ChatbotWidget />
    </>
  );
}

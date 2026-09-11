import { useEffect } from 'react';
import HospitalityDepartmentDetailView from '@/components/hospitality/HospitalityDepartmentDetailView';
import { hospitalityDepartments } from '@/data/hospitalityDepartments';

export default function SalesAndEventsPage() {
  const department = hospitalityDepartments.find((d) => d.id === 'sales-and-events')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Hospitality Sales & Events Careers | Dais World Endeavor Hospitality';
  }, []);

  return <HospitalityDepartmentDetailView department={department} />;
}

import { useEffect } from 'react';
import HealthcareDepartmentDetailView from '@/components/healthcare/HealthcareDepartmentDetailView';
import { healthcareDepartments } from '@/data/healthcareDepartments';

export default function DoctorsPhysiciansPage() {
  const department = healthcareDepartments.find((d) => d.id === 'doctors-physicians')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Doctors & Physicians Careers | Dais World Endeavor Healthcare';
  }, []);

  return <HealthcareDepartmentDetailView department={department} />;
}

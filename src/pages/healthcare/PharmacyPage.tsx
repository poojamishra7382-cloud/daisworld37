import { useEffect } from 'react';
import HealthcareDepartmentDetailView from '@/components/healthcare/HealthcareDepartmentDetailView';
import { healthcareDepartments } from '@/data/healthcareDepartments';

export default function PharmacyPage() {
  const department = healthcareDepartments.find((d) => d.id === 'pharmacy')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Pharmacy & Clinical Pharmaceutical Careers | Dais World Healthcare';
  }, []);

  return <HealthcareDepartmentDetailView department={department} />;
}

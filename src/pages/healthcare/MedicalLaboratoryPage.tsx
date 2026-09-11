import { useEffect } from 'react';
import HealthcareDepartmentDetailView from '@/components/healthcare/HealthcareDepartmentDetailView';
import { healthcareDepartments } from '@/data/healthcareDepartments';

export default function MedicalLaboratoryPage() {
  const department = healthcareDepartments.find((d) => d.id === 'medical-laboratory')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Medical Laboratory & Diagnostic Tech Careers | Dais World Endeavor Healthcare';
  }, []);

  return <HealthcareDepartmentDetailView department={department} />;
}

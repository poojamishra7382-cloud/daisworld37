import { useEffect } from 'react';
import HealthcareDepartmentDetailView from '@/components/healthcare/HealthcareDepartmentDetailView';
import { healthcareDepartments } from '@/data/healthcareDepartments';

export default function NursingPage() {
  const department = healthcareDepartments.find((d) => d.id === 'nursing')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Nursing & Critical Care Careers | Dais World Healthcare';
  }, []);

  return <HealthcareDepartmentDetailView department={department} />;
}

import { useEffect } from 'react';
import HealthcareDepartmentDetailView from '@/components/healthcare/HealthcareDepartmentDetailView';
import { healthcareDepartments } from '@/data/healthcareDepartments';

export default function AlliedHealthWellnessPage() {
  const department = healthcareDepartments.find((d) => d.id === 'allied-health-wellness')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Allied Health, Physiotherapy & Wellness Careers | Dais World Healthcare';
  }, []);

  return <HealthcareDepartmentDetailView department={department} />;
}

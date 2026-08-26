import { useEffect } from 'react';
import HospitalityDepartmentDetailView from '@/components/hospitality/HospitalityDepartmentDetailView';
import { hospitalityDepartments } from '@/data/hospitalityDepartments';

export default function HousekeepingPage() {
  const department = hospitalityDepartments.find((d) => d.id === 'housekeeping')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Housekeeping & Hotel Operations Careers | Dais World Hospitality';
  }, []);

  return <HospitalityDepartmentDetailView department={department} />;
}

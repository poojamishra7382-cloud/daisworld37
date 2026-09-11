import { useEffect } from 'react';
import HospitalityDepartmentDetailView from '@/components/hospitality/HospitalityDepartmentDetailView';
import { hospitalityDepartments } from '@/data/hospitalityDepartments';

export default function FrontOfficePage() {
  const department = hospitalityDepartments.find((d) => d.id === 'front-office')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Front Office & Hotel Reception Careers | Dais World Endeavor Hospitality';
  }, []);

  return <HospitalityDepartmentDetailView department={department} />;
}

import { useEffect } from 'react';
import HospitalityDepartmentDetailView from '@/components/hospitality/HospitalityDepartmentDetailView';
import { hospitalityDepartments } from '@/data/hospitalityDepartments';

export default function KitchenCulinaryPage() {
  const department = hospitalityDepartments.find((d) => d.id === 'kitchen-culinary')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Kitchen & Culinary Chef Careers | Dais World Endeavor Hospitality';
  }, []);

  return <HospitalityDepartmentDetailView department={department} />;
}

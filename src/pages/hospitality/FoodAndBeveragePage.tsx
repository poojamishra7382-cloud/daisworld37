import { useEffect } from 'react';
import HospitalityDepartmentDetailView from '@/components/hospitality/HospitalityDepartmentDetailView';
import { hospitalityDepartments } from '@/data/hospitalityDepartments';

export default function FoodAndBeveragePage() {
  const department = hospitalityDepartments.find((d) => d.id === 'food-and-beverage')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Food & Beverage (F&B) Careers | Dais World Endeavor Hospitality';
  }, []);

  return <HospitalityDepartmentDetailView department={department} />;
}

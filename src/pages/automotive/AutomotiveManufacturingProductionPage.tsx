import { useEffect } from 'react';
import AutomotiveDepartmentDetailView from '@/components/automotive/AutomotiveDepartmentDetailView';
import { automotiveDepartments } from '@/data/automotiveDepartments';

export default function AutomotiveManufacturingProductionPage() {
  const department = automotiveDepartments.find((d) => d.id === 'automotive-manufacturing-production')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Automotive Manufacturing & Production Careers | Dais World Endeavor';
  }, []);

  return <AutomotiveDepartmentDetailView department={department} />;
}

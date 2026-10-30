import { useEffect } from 'react';
import AutomotiveDepartmentDetailView from '@/components/automotive/AutomotiveDepartmentDetailView';
import { automotiveDepartments } from '@/data/automotiveDepartments';

export default function QualityControlTestingInspectionPage() {
  const department = automotiveDepartments.find((d) => d.id === 'quality-control-testing-inspection')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Quality Control, Testing & Inspection Careers | Dais World Endeavor';
  }, []);

  return <AutomotiveDepartmentDetailView department={department} />;
}

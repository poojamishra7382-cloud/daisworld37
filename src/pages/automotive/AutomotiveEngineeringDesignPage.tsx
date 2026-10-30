import { useEffect } from 'react';
import AutomotiveDepartmentDetailView from '@/components/automotive/AutomotiveDepartmentDetailView';
import { automotiveDepartments } from '@/data/automotiveDepartments';

export default function AutomotiveEngineeringDesignPage() {
  const department = automotiveDepartments.find((d) => d.id === 'automotive-engineering-design')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Automotive Engineering & Design Careers | Dais World Endeavor';
  }, []);

  return <AutomotiveDepartmentDetailView department={department} />;
}

import { useEffect } from 'react';
import AutomotiveDepartmentDetailView from '@/components/automotive/AutomotiveDepartmentDetailView';
import { automotiveDepartments } from '@/data/automotiveDepartments';

export default function AutomotiveElectricalEvPage() {
  const department = automotiveDepartments.find((d) => d.id === 'automotive-electrical-ev')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Automotive Electrical & Electric Vehicles (EV) Careers | Dais World Endeavor';
  }, []);

  return <AutomotiveDepartmentDetailView department={department} />;
}

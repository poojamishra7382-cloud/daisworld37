import { useEffect } from 'react';
import OilAndGasDepartmentDetailView from '@/components/oil-and-gas/OilAndGasDepartmentDetailView';
import { oilAndGasDepartments } from '@/data/oilAndGasDepartments';

export default function HseSafetyPage() {
  const department = oilAndGasDepartments.find((d) => d.id === 'hse-safety')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'HSE & Safety Careers | Dais World Oil & Gas';
  }, []);

  return <OilAndGasDepartmentDetailView department={department} />;
}

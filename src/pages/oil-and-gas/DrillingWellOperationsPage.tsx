import { useEffect } from 'react';
import OilAndGasDepartmentDetailView from '@/components/oil-and-gas/OilAndGasDepartmentDetailView';
import { oilAndGasDepartments } from '@/data/oilAndGasDepartments';

export default function DrillingWellOperationsPage() {
  const department = oilAndGasDepartments.find((d) => d.id === 'drilling-well-operations')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Drilling & Well Operations Careers | Dais World Endeavor Oil & Gas';
  }, []);

  return <OilAndGasDepartmentDetailView department={department} />;
}

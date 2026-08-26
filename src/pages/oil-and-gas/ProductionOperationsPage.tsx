import { useEffect } from 'react';
import OilAndGasDepartmentDetailView from '@/components/oil-and-gas/OilAndGasDepartmentDetailView';
import { oilAndGasDepartments } from '@/data/oilAndGasDepartments';

export default function ProductionOperationsPage() {
  const department = oilAndGasDepartments.find((d) => d.id === 'production-operations')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Production & Plant Operations Careers | Dais World Oil & Gas';
  }, []);

  return <OilAndGasDepartmentDetailView department={department} />;
}

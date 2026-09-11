import { useEffect } from 'react';
import OilAndGasDepartmentDetailView from '@/components/oil-and-gas/OilAndGasDepartmentDetailView';
import { oilAndGasDepartments } from '@/data/oilAndGasDepartments';

export default function ExplorationGeologyPage() {
  const department = oilAndGasDepartments.find((d) => d.id === 'exploration-geology')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Exploration & Geology Careers | Dais World Endeavor Oil & Gas';
  }, []);

  return <OilAndGasDepartmentDetailView department={department} />;
}

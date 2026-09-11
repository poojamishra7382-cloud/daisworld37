import { useEffect } from 'react';
import OilAndGasDepartmentDetailView from '@/components/oil-and-gas/OilAndGasDepartmentDetailView';
import { oilAndGasDepartments } from '@/data/oilAndGasDepartments';

export default function MaintenanceEngineeringPage() {
  const department = oilAndGasDepartments.find((d) => d.id === 'maintenance-engineering')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Maintenance & Engineering Careers | Dais World Endeavor Oil & Gas';
  }, []);

  return <OilAndGasDepartmentDetailView department={department} />;
}

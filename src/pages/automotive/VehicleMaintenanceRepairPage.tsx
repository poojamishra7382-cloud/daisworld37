import { useEffect } from 'react';
import AutomotiveDepartmentDetailView from '@/components/automotive/AutomotiveDepartmentDetailView';
import { automotiveDepartments } from '@/data/automotiveDepartments';

export default function VehicleMaintenanceRepairPage() {
  const department = automotiveDepartments.find((d) => d.id === 'vehicle-maintenance-repair')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Vehicle Maintenance & Repair Careers | Dais World Endeavor';
  }, []);

  return <AutomotiveDepartmentDetailView department={department} />;
}

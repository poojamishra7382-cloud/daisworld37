import { useEffect } from 'react';
import ConstructionDepartmentDetailView from '@/components/construction/ConstructionDepartmentDetailView';
import { constructionDepartments } from '@/data/constructionDepartments';

export default function ElectricalPage() {
  const department = constructionDepartments.find((d) => d.id === 'electrical')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Electrical Engineering & Installation Careers | Dais World Construction';
  }, []);

  return <ConstructionDepartmentDetailView department={department} />;
}

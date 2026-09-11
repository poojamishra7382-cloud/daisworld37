import { useEffect } from 'react';
import ConstructionDepartmentDetailView from '@/components/construction/ConstructionDepartmentDetailView';
import { constructionDepartments } from '@/data/constructionDepartments';

export default function PlumbingHvacPage() {
  const department = constructionDepartments.find((d) => d.id === 'plumbing-hvac')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Plumbing & HVAC Mechanical Careers | Dais World Endeavor Construction';
  }, []);

  return <ConstructionDepartmentDetailView department={department} />;
}

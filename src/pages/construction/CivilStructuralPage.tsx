import { useEffect } from 'react';
import ConstructionDepartmentDetailView from '@/components/construction/ConstructionDepartmentDetailView';
import { constructionDepartments } from '@/data/constructionDepartments';

export default function CivilStructuralPage() {
  const department = constructionDepartments.find((d) => d.id === 'civil-structural')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Civil & Structural Engineering Careers | Dais World Construction';
  }, []);

  return <ConstructionDepartmentDetailView department={department} />;
}

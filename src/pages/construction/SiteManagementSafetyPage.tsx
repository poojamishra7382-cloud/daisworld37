import { useEffect } from 'react';
import ConstructionDepartmentDetailView from '@/components/construction/ConstructionDepartmentDetailView';
import { constructionDepartments } from '@/data/constructionDepartments';

export default function SiteManagementSafetyPage() {
  const department = constructionDepartments.find((d) => d.id === 'site-management-safety')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Site Management, Safety & QA/QC Careers | Dais World Construction';
  }, []);

  return <ConstructionDepartmentDetailView department={department} />;
}

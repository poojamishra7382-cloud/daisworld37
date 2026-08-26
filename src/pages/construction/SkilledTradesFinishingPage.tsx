import { useEffect } from 'react';
import ConstructionDepartmentDetailView from '@/components/construction/ConstructionDepartmentDetailView';
import { constructionDepartments } from '@/data/constructionDepartments';

export default function SkilledTradesFinishingPage() {
  const department = constructionDepartments.find((d) => d.id === 'skilled-trades-finishing')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Skilled Trades & Finishing Careers | Dais World Construction';
  }, []);

  return <ConstructionDepartmentDetailView department={department} />;
}

import { useEffect } from 'react';
import BeautyAndCareDepartmentDetailView from '@/components/beauty-and-care/BeautyAndCareDepartmentDetailView';
import { beautyAndCareDepartments } from '@/data/beautyAndCareDepartments';

export default function MakeupBridalPage() {
  const department = beautyAndCareDepartments.find((d) => d.id === 'makeup-bridal')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Makeup & Bridal Glamour Careers | Dais World Endeavor Beauty & Care';
  }, []);

  return <BeautyAndCareDepartmentDetailView department={department} />;
}

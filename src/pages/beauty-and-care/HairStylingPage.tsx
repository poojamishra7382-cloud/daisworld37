import { useEffect } from 'react';
import BeautyAndCareDepartmentDetailView from '@/components/beauty-and-care/BeautyAndCareDepartmentDetailView';
import { beautyAndCareDepartments } from '@/data/beautyAndCareDepartments';

export default function HairStylingPage() {
  const department = beautyAndCareDepartments.find((d) => d.id === 'hair-styling')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Hair & Styling Careers | Dais World Beauty & Care';
  }, []);

  return <BeautyAndCareDepartmentDetailView department={department} />;
}

import { useEffect } from 'react';
import BeautyAndCareDepartmentDetailView from '@/components/beauty-and-care/BeautyAndCareDepartmentDetailView';
import { beautyAndCareDepartments } from '@/data/beautyAndCareDepartments';

export default function SpaWellnessPage() {
  const department = beautyAndCareDepartments.find((d) => d.id === 'spa-wellness')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Spa & Wellness Careers | Dais World Beauty & Care';
  }, []);

  return <BeautyAndCareDepartmentDetailView department={department} />;
}

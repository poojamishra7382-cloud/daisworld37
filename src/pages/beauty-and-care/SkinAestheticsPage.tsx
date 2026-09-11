import { useEffect } from 'react';
import BeautyAndCareDepartmentDetailView from '@/components/beauty-and-care/BeautyAndCareDepartmentDetailView';
import { beautyAndCareDepartments } from '@/data/beautyAndCareDepartments';

export default function SkinAestheticsPage() {
  const department = beautyAndCareDepartments.find((d) => d.id === 'skin-aesthetics')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Skin & Aesthetics Careers | Dais World Endeavor Beauty & Care';
  }, []);

  return <BeautyAndCareDepartmentDetailView department={department} />;
}

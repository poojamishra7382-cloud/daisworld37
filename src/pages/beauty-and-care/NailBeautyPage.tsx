import { useEffect } from 'react';
import BeautyAndCareDepartmentDetailView from '@/components/beauty-and-care/BeautyAndCareDepartmentDetailView';
import { beautyAndCareDepartments } from '@/data/beautyAndCareDepartments';

export default function NailBeautyPage() {
  const department = beautyAndCareDepartments.find((d) => d.id === 'nail-beauty')!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Nail & Beauty Careers | Dais World Endeavor Beauty & Care';
  }, []);

  return <BeautyAndCareDepartmentDetailView department={department} />;
}

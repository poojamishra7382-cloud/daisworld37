import SkilledJobDetailView from '@/components/skilled-jobs/SkilledJobDetailView';
import { skilledJobsDetailData } from '@/data/skilledJobsDetailData';

export default function CraneOperatorsJobPage() {
  const job = skilledJobsDetailData.find((j) => j.id === 'crane-operators')!;
  return <SkilledJobDetailView job={job} />;
}


import SkilledJobDetailView from '@/components/skilled-jobs/SkilledJobDetailView';
import { skilledJobsDetailData } from '@/data/skilledJobsDetailData';

export default function WeldersJobPage() {
  const job = skilledJobsDetailData.find((j) => j.id === 'welders')!;
  return <SkilledJobDetailView job={job} />;
}


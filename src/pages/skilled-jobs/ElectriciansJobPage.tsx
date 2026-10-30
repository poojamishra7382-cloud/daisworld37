import SkilledJobDetailView from '@/components/skilled-jobs/SkilledJobDetailView';
import { skilledJobsDetailData } from '@/data/skilledJobsDetailData';

export default function ElectriciansJobPage() {
  const job = skilledJobsDetailData.find((j) => j.id === 'electricians')!;
  return <SkilledJobDetailView job={job} />;
}


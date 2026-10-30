import SkilledJobDetailView from '@/components/skilled-jobs/SkilledJobDetailView';
import { skilledJobsDetailData } from '@/data/skilledJobsDetailData';

export default function ScaffoldersJobPage() {
  const job = skilledJobsDetailData.find((j) => j.id === 'scaffolders')!;
  return <SkilledJobDetailView job={job} />;
}


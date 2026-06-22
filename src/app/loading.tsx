import { Spinner } from '@/components/ui/spinner';

export default function Page() {
  return (
    <div className='flex flex-col items-center m-20'>
      <div className='flex items-center gap-4 min-h-150'>
        <Spinner />
      </div>
    </div>
  );
}

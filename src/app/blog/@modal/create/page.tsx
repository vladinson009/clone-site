'use client';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog'; // If you're using shadcn UI
import CreateBlogForm from '@/components/blog/create-blog';
import { DialogTitle } from '@radix-ui/react-dialog';

export default function CreateModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // goes back to /blog
  };

  return (
    <Dialog open onOpenChange={handleClose}>
      <DialogContent>
        <DialogTitle>Create Record</DialogTitle>
        <CreateBlogForm />
      </DialogContent>
    </Dialog>
  );
}

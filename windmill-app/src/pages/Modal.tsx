import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";


export default function Modal() {
  return (
    <div className="space-y-4">
      
      <h1 className="text-lg font-semibold">Modal</h1>

      <Dialog>
        
        
        <DialogTrigger asChild>
          <Button>Open Modal</Button>
        </DialogTrigger>

        
        <DialogContent className="p-4">

          
          <DialogClose asChild>
          </DialogClose>

          
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to continue? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          
          <DialogFooter className="mt-4">
            
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button>Accept</Button>

          </DialogFooter>

        </DialogContent>
      </Dialog>
    </div>
  );
}
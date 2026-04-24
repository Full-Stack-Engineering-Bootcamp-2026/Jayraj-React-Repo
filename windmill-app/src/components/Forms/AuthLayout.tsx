import { Card } from "@/components/ui/card";

type Props = {
  children: React.ReactNode;
  image: string;
  className?: string; 
};

export default function AuthLayout({ children, image, className }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      
      <Card
        className={`w-full max-w-6xl h-130 grid grid-cols-1 md:grid-cols-2 overflow-hidden p-0 ${className}`}
      >
        
        
        <div className="hidden md:block w-full h-full">
          <img
            src={image}
            alt="auth visual"
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="flex items-center justify-center p-10">
          <div className="w-full max-w-sm">
            {children}
          </div>
        </div>

      </Card>

    </div>
  );
}
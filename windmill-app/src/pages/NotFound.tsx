import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      
      <div className="text-center space-y-4">
        
        
        <div className="flex justify-center">
          <FiAlertCircle className="text-destructive text-6xl" />
        </div>

        
        <h1 className="text-5xl font-bold">404</h1>

        
        <p className="text-muted-foreground">
          Page not found. Check the address or go back.
        </p>

        
        <Link to="/">
          <Button variant="default">
            Go to Dashboard
          </Button>
        </Link>

      </div>

    </div>
  );
}
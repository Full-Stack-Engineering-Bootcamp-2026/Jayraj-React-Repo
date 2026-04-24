import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";

export default function CreateAccountForm() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center h-full space-y-6">
      
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Create account</h2>
      </div>

      
      <div className="space-y-4">
        
        <div className="space-y-1">
          <Label>Email</Label>
          <Input placeholder="jane.doe@example.com" />
        </div>

        <div className="space-y-1">
          <Label>Password</Label>
          <Input type="password" placeholder="********" />
        </div>

        <div className="space-y-1">
          <Label>Confirm password</Label>
          <Input type="password" placeholder="********" />
        </div>

      </div>

      
      <div className="flex items-center gap-2">
        <Checkbox />
        <span className="text-sm text-muted-foreground">
          I agree to the privacy policy
        </span>
      </div>

      
      <Button type="submit" className="w-full">
        Create account
      </Button>

      
      <div className="space-y-2">
        <Button variant="outline" className="w-full">
          Continue with GitHub
        </Button>

        <Button variant="outline" className="w-full">
          Continue with Twitter
        </Button>
      </div>

      
      <div className="text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </div>

    </form>
  );
}
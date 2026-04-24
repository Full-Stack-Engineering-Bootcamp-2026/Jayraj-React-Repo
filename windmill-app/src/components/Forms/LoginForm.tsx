import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col justify-center h-full space-y-6">
      

      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to continue
        </p>
      </div>

    
      <div className="space-y-4">
        
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            className="h-9 text-sm"
            
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            className="h-9 text-sm"
          />
        </div>

      </div>

      
      <Button type="submit" className="w-full h-9">
        Log in
      </Button>

      
      <div className="space-y-2">
        <Button variant="outline" className="w-full h-9">
          Continue with GitHub
        </Button>

        <Button variant="outline" className="w-full h-9">
          Continue with Twitter
        </Button>
      </div>

      
      <div className="flex justify-between text-sm">
        <Link to="/reset-password" className="text-primary hover:underline">
          Forgot password?
        </Link>

        <Link to="/create-account" className="text-primary hover:underline">
          Create account
        </Link>
      </div>

    </form>
  );
}
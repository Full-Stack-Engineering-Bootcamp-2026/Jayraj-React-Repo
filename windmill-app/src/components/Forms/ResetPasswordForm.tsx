import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPasswordForm() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Reset password</h2>
        <p className="text-sm text-muted-foreground">
          Enter your email to receive reset instructions
        </p>
      </div>

      
      <div className="space-y-1">
        <Label>Email</Label>
        <Input placeholder="jane.doe@example.com" />
      </div>

      
      <Button type="submit" className="w-full">
        Recover Password
      </Button>

      
      <div className="text-sm text-center">
        Remember your password?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </div>

    </form>
  );
}
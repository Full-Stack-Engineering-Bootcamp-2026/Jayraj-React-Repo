import AuthLayout from "@/components/Forms/AuthLayout";
import LoginForm from "@/components/Forms/LoginForm";

export default function Login() {
  return (
    <AuthLayout image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop">
      <LoginForm />
    </AuthLayout>
  );
}
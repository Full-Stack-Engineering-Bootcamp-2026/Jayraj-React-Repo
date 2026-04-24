import AuthLayout from "@/components/Forms/AuthLayout";
import CreateAccountForm from "@/components/Forms/CreateAccountFrom";

export default function CreateAccount() {
  return (
    <AuthLayout image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop">
      <CreateAccountForm />
    </AuthLayout>
  );
}
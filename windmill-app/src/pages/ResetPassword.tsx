import AuthLayout from "@/components/Forms/AuthLayout";
import ResetPasswordForm from "@/components/Forms/ResetPasswordForm";

export default function ResetPassword() {
  return (
    <AuthLayout
      image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
      className="h-150"
    >
      
      <div className="w-full max-w-sm -mt-10">
        <ResetPasswordForm />
      </div>
    </AuthLayout>
  );
}
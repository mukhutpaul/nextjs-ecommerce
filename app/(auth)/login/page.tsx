import { getApiInstance } from "@/app/oneentry"
import DynamycLoginForm from "@/components/ui/dynamycLoginForm";

async function LoginPage() {
  const apiInstance = await getApiInstance();
  const loginForm = await apiInstance?.Forms.getFormByMarker('signin');

  console.log(loginForm);
  return <DynamycLoginForm formEntity={loginForm} />
}

export default LoginPage
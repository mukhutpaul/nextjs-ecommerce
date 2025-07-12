import { getApiInstance } from "@/app/oneentry"
import DynamicSignupForm from "@/components/ui/dynamicSignupForm";

async function SignUpPage() {
     const apiInstance = await getApiInstance()
     const signupForm = await apiInstance?.Forms.getFormByMarker('signup')


      //signupyt
      //'signupyt1'
  return <DynamicSignupForm formEntity={signupForm as any} />;
  
}

export default SignUpPage
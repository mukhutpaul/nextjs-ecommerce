import { getApiInstance } from "@/app/oneentry"

async function SignUpPage() {
     const apiInstance = await getApiInstance()
     const signupForm = await apiInstance?.Forms.getFormByMarker('signupyt')
      
  return <DynamicSignupForm 
  form={signupForm} 
  
  />
}

export default SignUpPage
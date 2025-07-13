"use server"

import { getApiInstance } from "@/app/oneentry";
import { ISignUpData } from "oneentry/dist/auth-provider/authProvidersInterfaces";


export default async function signupAction(
    prevState: any,
    formData : FormData 
) {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const fullName = formData.get("fullname") as string;
    const ApiInstance = await getApiInstance();

    if(!email){
        return {message: "plaise enter your email Adrese"};   
    }
    
    if(!password){
        return {message: "Set the login password"};   
    }

     
    if(!fullName){
        return {message: "Please enter your full name"};   
    }

    try {

        const data: ISignUpData = {
            formIdentifier: "signup",
            authData:[
                {
                    marker: 'email',
                    value: email
                },

                {
                    marker: 'password',
                    value: password
                },

                {
                    marker: 'fullname',
                    value: fullName
                }
            ],
            formData: [
                 {
                    marker: 'email',
                    type: 'string',
                    value: email
                },

                {
                    marker: 'password',
                    type: 'string',
                    value: password
                },

                {
                    marker: 'fullname',
                    type: 'string',
                    value: fullName
                }

            ],
            notificationData: {
                email,
                phonePush:["+243816932639"],
                phoneSMS:"+243816932639"
            }
        };

        const formDataRes = await ApiInstance?.AuthProvider.signUp('signupyt',data);
        
        return formDataRes;
        
        
    } catch (error: any) {
        console.error(error);
        if(error?.statusCode === 400){
            return { message: error?.message}
        }

        throw new Error("Failed to sign up. Please try again");
        
    }





}
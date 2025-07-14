"use server"

import { getApiInstance } from "@/app/oneentry"
import { IErroredResponse } from "@/lib/definitions";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IAuthPostBody } from "oneentry/dist/auth-provider/authProvidersInterfaces";

export default async function loginAction(prevState:any,formData: FormData){
    const account = formData.get('account') as string
    const password = formData.get('password') as string
    const apiInstance = await getApiInstance();

    if(!apiInstance){
        return {message: 'Plaise enter your email adresse'};
    }

    if(!password) {
        return {message: "Set the login password"};
    }

    try {
     const data: IAuthPostBody = {
        authData:[
            {
                marker:'account',
                value:account
            },

              {
                marker:'password',
                value:password
            }
        ]
     };

     const authRes = await apiInstance.AuthProvider.auth('signinauth',data);

     cookies().set('access_token',authRes.accessToken,{
        maxAge: 60 * 60 * 24, // 24 hours

     })

    cookies().set('refresh_token',authRes.refreshToken,{
        maxAge: 60 * 60 * 24, // 24 hours

    })
    cookies().set('user_identifier',authRes.accessToken,{
        maxAge: 60 * 60 * 7, // 7 days

     })

     if(!authRes){
        const error = authRes as unknown as IErroredResponse;
        return {message : error.message}
     }


        
    } catch (error:any) {
         
         console.error(error);
        if(error?.statusCode === 401){
            return { message: error?.message}
        }

        throw new Error("Failed to sign in. Please try again");
        
    }

    redirect("/")

}
'use server'

import { getApiInstance } from "@/app/oneentry"
import { cookies } from "next/headers"
import { access } from "node:fs/promises";


export default async function fetchUserSession(){
    const apiInstance = await getApiInstance()
    const access_token = cookies().get("access_token")?.value;

    
    if(!access_token) return null;

    try {
        const user = await apiInstance?.Users.setAccessToken(access_token).getUser();

        if(!user || !user.id){
            throw new Error('User data is invalid or missing ID');
        }

        return user; 
    } catch (error) {
        console.error('Error: fetching user sesson: ',error)

        throw new Error(`Error fetching user session ${error instanceof Error ? error.message:'unknown error'}`)

    }

}
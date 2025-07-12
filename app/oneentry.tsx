import getRefreshToken from "@/actions/getRefreshToken";
import setRefreshToken from "@/actions/setRefreshToken";
import { defineOneEntry } from "oneentry";


export type  ApiInstanceType = ReturnType<typeof defineOneEntry> | null;

let apiInstance : ApiInstanceType = null;

async function initializeApi(): Promise<ApiInstanceType> {
    const url = process.env.API_URL    

    if(!url) {
        throw new Error("API_URL is not defned")
    }

    if(!apiInstance){
        let refreshToken : string | undefined = await getRefreshToken().catch((error) =>{
            console.error("Failed to get initial refresh token",error);
            return undefined;
        })

        apiInstance = defineOneEntry(url, {
            token: process.env.API_TOKEN,
            langCode: 'fr_FR',
            auth: {
                customAuth: false,
                refreshToken,
                saveFunction: async (token: string) => {
                    await setRefreshToken(token);
                }

            }
        });
    }

    return apiInstance;

}

export async function getApiInstance(){
    if(!apiInstance){
        await initializeApi(); 

    }
    return apiInstance;

}

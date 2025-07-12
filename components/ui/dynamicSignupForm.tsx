"use client"

import { div } from "framer-motion/client"
import { IAttributes } from "oneentry/dist/base/utils"
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces"
import { IFormDataEntity } from "oneentry/dist/formsData/formsDataInterfaces"
import { useFormState } from "react-dom"

const initialState ={
    message:"",
}
function DynamicSignupForm({formEntity} : {
    formEntity: IFormsEntity | undefined
}) {
    //const {state,formAction} = useFormState(formAction,initialState);
    //(useToastOnStateChange(state)
  return <form  className="space-y-4 w-full -mt-20">
    {formEntity?.attributes.map((attribute:IAttributes) =>(

        <div 
        key={attribute.position}
        className="flex items-center space-x-2">
        
        <label htmlFor=""
        className="block text-xs font-medium text-[#666] w-36 text-right">
            {attribute.localizeInfos?.title}
        </label>

        <div className="w-full">
            <input id={attribute.marker}
            required={attribute.validators?.requiredValidator?.strict}
            name={attribute.marker}
            className="authInput"
            placeholder={attribute.localizeInfos?.tite}

            />

        </div>

        </div>

    ))}

  </form>
}
export default DynamicSignupForm
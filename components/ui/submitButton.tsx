"use client "

import { useFormState, useFormStatus } from "react-dom";

function SubmitButton({className,children} : {className?: string; children:React.ReactNode}) {
    const { pending } = useFormStatus();

  return <button disabled={pending} className={className}>
        {children}
  </button>
}

export default SubmitButton;
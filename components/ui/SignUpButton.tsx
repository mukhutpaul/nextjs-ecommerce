'use client'

import {motion} from "framer-motion";
import { useRouter } from "next/navigation";
import { buttonVariants } from "./button";


function SignUpButton() {
    const router = useRouter();
  return(
    <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push("/signup")}
        className={buttonVariants({
            className: '!font-semibold !rounded-full !w-28',
            size: "sm"
        })}
        >
        Sign Up
    </motion.button>

  );
}

export default SignUpButton
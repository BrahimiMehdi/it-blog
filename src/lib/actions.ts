"use server"
import { revalidatePath } from "next/cache"
export const contactForm= async()=>{
    revalidatePath("/")
   return "Hello"
}
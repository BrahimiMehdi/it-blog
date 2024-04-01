import React from "react";
import ContactUs from "../../../public/contactus.svg"
import { contactForm } from "@/lib/actions";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="grid my-12 place-items-center grid-cols-2 gap-6 w-full max-w-7xlxl">
      <form action={contactForm} className="flex w-full flex-col gap-y-6 px-12">
        <h3 className="text-4xl text-green font-bold">Contact Us</h3>
        <input type="text" className="h-12 rounded-lg  bg-white px-4" placeholder="Name" />
        <input type="email" className="h-12 rounded-lg  bg-white px-4" placeholder="Email" />
        <textarea  className="min-h-48 max-h-64 rounded-lg py-4 bg-white px-4" placeholder="Message" />
        <button className="px-16 h-12 rounded-lg bg-green capitalize text-white font-bold">
            send
        </button>
      </form>
      <Image className="w-96 h-full object-contain" src={ContactUs} alt="contact vector" />
    </section>
  );
};

export default Contact;

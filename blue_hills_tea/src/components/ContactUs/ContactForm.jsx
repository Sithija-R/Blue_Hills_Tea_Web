import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const formFields = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "Your email address",
    },
    {
      label: "Mobile Number (Optional)",
      name: "phone",
      type: "tel",
      placeholder: "+94 (55) 555-5555",
    },
    {
      label: "Subject",
      name: "subject",
      type: "text",
      placeholder: "What is your message about?",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setLoading(true);
  
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          to_name: "Blue Hills Tea Factory",
          from_email: formData.email,
          to_email: "newbluemounttea@gmail.com",
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          title: "Successfully Sent!",
          text: "Thank you. We will get back to you as soon as possible.",
          icon: "success",
        });
  
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
  
        setLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
  
        setLoading(false); 
      });
  };
  

  return (
    <div className="w-full max-w-7xl mx-auto  px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className=" p-6  space-y-4">
        {formFields.map((field) => (
          <div key={field.name}>
            <label className="block text-lg font-semibold mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-4  focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#D9D9D952] rounded-xl mb-3"
              placeholder={field.placeholder}
            />
          </div>
        ))}

        <div>
          <label className="block text-lg  font-semibold mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4  focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#D9D9D952] rounded-xl mb-3"
            rows="5"
            placeholder="Please provide details about your inquiry or feedback.."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="bg-[#2563EB] hover:bg-blue-600 text-xl text-white px-6 py-4 rounded-xl cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;

import { useState } from "react";
import emailjs from "emailjs-com";
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const ContactMeForm = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dl9pgdk",         // replace with your EmailJS service ID
        "template_env5m0w",        // replace with your EmailJS template ID
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey             // replace with your EmailJS public key
      )
      .then(() => {
        setFormSent(true);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Try again later.");
      });
  };

  return (
      <>
         <div className="mx-auto max-w-2xl">
            <div className="mt-40 mb-12  p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-xl ">
               {formSent ? (
               <div className="text-center py-12 text-green-500 font-semibold text-xl animate-fade-in">
                  📩 Mail delivered! Thanks for reaching out.
               </div>
               ) : (
               <form className="space-y-6" onSubmit={sendEmail}>
                  <h2 className="text-3xl font-bold text-center text-black">
                     Hey, let’s talk!
                  </h2>

                  <input
                     type="email"
                     name="from_email"
                     required
                     placeholder="Your email"
                     value={formData.email}
                     onChange={(e) =>
                     setFormData({ ...formData, email: e.target.value })
                     }
                     className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <input
                     type="text"
                     name="subject"
                     required
                     placeholder="Subject"
                     value={formData.subject}
                     onChange={(e) =>
                     setFormData({ ...formData, subject: e.target.value })
                     }
                     className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <textarea
                     name="message"
                     required
                     placeholder="Write your message..."
                     value={formData.message}
                     onChange={(e) =>
                     setFormData({ ...formData, message: e.target.value })
                     }
                     rows="6"
                     className="w-full p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>

                  <button
                     type="submit"
                     className="w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 ease-in-out shadow-md"
                  >
                     Send Message
                  </button>
               </form>
               )}
            </div>
         </div>
      </>
  );
};

export default ContactMeForm;
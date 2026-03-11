import React, { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill all fields correctly.");
      return;
    }

    const form = new FormData();
    form.append("access_key", "7b8fae4a-072d-49d8-ad94-0e45c737b1a3");

    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <main className="pt-20 bg-[#04081A] text-white min-h-screen">
      <section className="min-h-screen flex items-center px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Me
            </h2>

            <p className="text-gray-300">
              Interested in working together or have a question?  
              Feel free to send me a message.
            </p>

            <div className="space-y-6">

              <div className="flex items-center space-x-4">
                <Mail className="text-purple-400" />
                <div>
                  <h3>Email</h3>
                  <p className="text-gray-400">
                    onkarvaidya.dev@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-pink-400" />
                <div>
                  <h3>Location</h3>
                  <p className="text-gray-400">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/5 border border-gray-700"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/5 border border-gray-700"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-white/5 border border-gray-700"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg bg-white/5 border border-gray-700"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg flex justify-center items-center gap-2"
              >
                Send Message <Send size={18} />
              </button>

              {status && (
                <p className="text-center text-green-400 mt-3">
                  {status}
                </p>
              )}

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
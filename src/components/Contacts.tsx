import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        "service_q265xui",
        "template_0c6503s",
        templateParams,
        "KTptpcZrvrFTbklIb"
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", subject: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.error(error);
      });
  };

  return (
<section 
  id="contact" 
  style={{ padding: "50px", maxWidth: "500px", margin: "auto" }}
>      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Subject"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />

        <br /><br />

        <textarea
          placeholder="Your Message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <br /><br />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
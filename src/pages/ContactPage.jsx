import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: ""});

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setForm({ firstName: "", lastName: "", email: "", message: "" });
        alert("Message sent! (demo)");
    }

    return (
        <>
          <h2 className="section-title">Contact Us</h2>

          <div className="contact-info">
            Have feedback or feature requests? Send us a message below.
          </div>    
          
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <label className="visually-hidden" htmlFor="name">First Name</label>
            <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                />

                <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                />

            <label className="visually-hidden" htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
            />

            <label className="visually-hidden" htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="How can we help?"
                value={form.message}
                onChange={handleChange}
                required
            />
            <button type="submit" className="add-btn">Send Message</button>
          </form>
        </>
    );  
}
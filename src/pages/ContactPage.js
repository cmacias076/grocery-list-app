import React, { useState } from 'react';

const ContactPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Contact Us</h1>
            {submitted && <p style={{ color: 'green' }}>Thanks for reaching out!</p>}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Name</label><br />
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }}
                        />
                    </div>

                    <div style ={{ marginBottom: '1rem' }}>
                    <label>Email</label><br />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                    <label>Message</label><br />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        style={{ width: '100%', padding: '8px' }}
                        />
                    </div>

                    <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;
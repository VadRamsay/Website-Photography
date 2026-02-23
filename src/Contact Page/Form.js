import { useState } from 'react'


function Form() {
    const [formData, setFormData] = useState({
        firstname: '',
        phone: '',
        email: '',
        contact_type: '',
        session_type: '',
        referral: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true)
    }




    return (

        <form className="contact-form" onSubmit={handleSubmit}>

            <h1>Contact Me</h1>

            <label>Your Name *
                <input type="text" name="firstname" required
                    value={formData.firstname} onChange={handleChange}
                />
            </label>

            <label>Phone Number *
                <input type="tel" name="phone" required
                    value={formData.phone} onChange={handleChange}
                />
            </label>

            <label>Email Address *
                <input type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                />
            </label>

            <label>How would you prefer to communicate?
                <select id="contact_type" name="contact_type"
                    value={formData.contact_type} onChange={handleChange}>
                    <option value="">Select Option</option>
                    <option value="text">Text Messaging</option>
                    <option value="email">email</option>
                </select>
            </label>

            <label>What type of session are you looking for?
                <select id="session_type" name="session_type"
                    value={formData.session_type} onChange={handleChange}>
                    <option value="">Select Option</option>
                    <option value="solo">Solo Portraits</option>
                    <option value="couple">Couple</option>
                    <option value="wedding">Wedding</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label>How did you hear about me? ... or you don't have to.
                <select id="referral" name="referral"
                    value={formData.referral} onChange={handleChange}>
                    <option value="">Select Option</option>
                    <option value="google">Google Search</option>
                    <option value="friend">From a Friend</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label>Tell Me More!
                <textarea id="message" name="message" rows="6"
                    value={formData.message} onChange={handleChange}>
                </textarea>

            </label>

            <button type="submit" className="submit">Send Message</button>

            {submitted && <p id="thank-you">Thank you! Your message has been sent.</p>}

        </form >
    );
}

export default Form;
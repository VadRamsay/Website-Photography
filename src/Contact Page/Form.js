import { useState } from 'react'


function Form() {
    const [name, setName] = useState({});

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setName(values => ({ ...values, [name]: value }))
    }


    return (

        <form className="contact-form">

            <h1>Contact Me</h1>

            <label>Your Name *
                <input type="text" name="firstname" required
                    value={name.firstname} onChange={handleChange}
                />
            </label>

            <label>Phone Number *
                <input type="tel" name="phone" required
                    value={name.firstname} onChange={handleChange}
                />
            </label>

            <label>Email Address *
                <input type="email" name="email" required
                    value={name.firstname} onChange={handleChange}
                />
            </label>

            <label>How would you prefer to communicate?
                <select id="contact-method" name="contact-type">
                    <option value="">Select Option</option>
                    <option value="text">Text Messaging</option>
                    <option value="email">Select Option</option>
                </select>
            </label>

            <label>What type of session are you looking for?
                <select id="session_type" name="session_type">
                    <option value="">Select Option</option>
                    <option value="solo">Solo Portraits</option>
                    <option value="couple">Couple</option>
                    <option value="wedding">Wedding</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label>How did you hear about me? ... or you don't have to.
                <select id="referral" name="referral">
                    <option value="">Select Option</option>
                    <option value="google">Google Search</option>
                    <option value="friend">From a Friend</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label>Tell Me More!
                <textarea id="message" name="message" rows="6"></textarea>
            </label>

        </form >
    );
}

export default Form;
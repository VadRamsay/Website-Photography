import Form from './Form'
import Kanban from '../Kanban/Modal'
import './Contact.css'

function Contact() {
    return (
        <>
            <div className="contact-page">
                <Form />
            </div>
            <Kanban />
        </>
    )
}

export default Contact;
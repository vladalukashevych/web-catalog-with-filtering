import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ContactPage() {
    return (
        <div className="wrapper">
            <Header />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default ContactPage;
import Footer from '../layout/Footer'

import styles from './Contact.module.css'

function Contact() {

    function submitDoubt() {
        alert('Dúvida enviada!')
    }

    return (
        <div className={styles.contact_content}>
            <form className={styles.form_container}>
                <div className={styles.form_content}>
                    <h2>Qual sua dúvida?</h2>
                    <input type="text" placeholder="Qual seu nome?">
                    </input>
                    <input type="email" placeholder="Digite seu e-mail.">
                    </input>
                    <input type="textarea" rows="5" cols="30" placeholder="Escreva sua dúvida.">
                    </input>
                    <button type="submit" className={styles.button_submit} onClick={submitDoubt}>Enviar</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Contact
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact=()=>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4na3l0g', 'template_9bpnfeh', form.current, 'dwxZvbIpg5miawniA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return<>
        <div className="contact" id="contact">
            <div className="text">
               <center>
               <h1>Contactez-nous</h1>
                <p>Vous souhaitez en savoir d'avantage sur LICERIA  et ses services? Laissez-nous un message.</p>
               </center>
                <div className="formulaire">
                    <center>
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="email">
                        <div className="label-sujet">Nom</div>
                        <div className="champ"><input type="text" name="name" placeholder="Votre nom" style={{height:'40px'}} required/></div>
                    </div>
                    <div className="sujet">
                        <div className="label-email">Email</div>
                        <div className="champ"><input type="email" name='email' placeholder="email@exemple.com" style={{height:'40px'}}  required/></div>
                    </div>
                    <div className="votremsg">
                        <div className="label-msg">Votre message</div>
                        <div className="champmsg"><textarea placeholder='Laissez votre message....' rows={10} name='message'  required></textarea></div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Envoyer" id='button'/>
                    </div>
                </form>
                    </center>
                </div>

            </div>
        </div>
    </>;
}

export default Contact;
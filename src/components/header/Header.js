import './Header.css';


const Header=()=>{

    const toContact = () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        console.log("clicked");
      };
    
      const toAbout = () => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        console.log("clicked");
      };


      const toFaq = () => {
        const element = document.getElementsByClassName('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        console.log("clicked");
      };

    return<>
        <header>
            <div className="logo"><img src='./logo.png'/></div>
            <div className="rigth">
                <div className="lien"><a href='/'>HOME</a></div>
                <div className="lien"><span onClick={toAbout} className='bouton'>ABOUT US</span></div>
                <div className="lien"><span onClick={toFaq} className='bouton'>FAQS</span></div>
                <div className="contactUs"><button onClick={toContact} className='bouton'>CONTACT US</button></div>
                <div className="lien " id='menu'>
                   <button className='btnmenu'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                   </button>
                </div>
            </div>
        </header>
    </>;
}

export default Header;
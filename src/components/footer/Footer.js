import './Footer.css';


const Footer=()=>{
    return<>
        <footer>
            <p>Nos réseaux sociaux</p>
           <div className='nosreseau'>
                <div className='itemReseau'><img src='./insta.png'/><span>INSTAGRAM</span></div>
                <div className='itemReseau'><img src='./facebook.png'/><span>FACEBOOK</span></div>
                <div className='itemReseau'><img src='./snap-removebg-preview.png'/><span>SNAPCHAT</span></div>
           </div>
           
           <div className='copyright'>
           <hr/>
            <span className='copyrightTexte'>© Copyright 2023, LICERIA co.</span>
           </div>
        </footer>
    </>;
}

export default Footer;
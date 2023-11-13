import './Section.css';

const Section=()=> {
    return<>
            <section className="presentation product section1">
               
                <div className="left textePresente">
                    LICERIA est une application polyvalente conçue pour aider les utilisateurs à lire, télécharger et stocker tout type de document.
                    Avec LICERIA, les utilisateurs peuvent accéder à une grande variété de documents, tels que des livres, des articles de recherche,
                    des rapports d'entreprise, des présentations et bien plus encore.
                </div>
                <div className="rigth">
                    <img src="./mockup.png"/>
                </div>
            </section>
        </>;
}

export default Section;
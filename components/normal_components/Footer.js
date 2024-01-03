import logo2 from '../../images/logo2.png';
export default function Footer()
{
    return (
        <div className="footer">
            <div className="logo">
                <img className="logo-image" src={logo2} alt="ALPHA LOGO" />
            </div>
            <div className="liens-rapide">
                <div className="title">
                    Liens rapide
                </div>
                <div className="liens">
                    <ul style={{marginLeft:-40}}>
                    {/*  */}
                        <li className="item-name">
                            Home
                        </li>
                        <li className="item-name">
                            About Us
                        </li>
                        <li className="item-name">
                            Services
                        </li>
                        <li className="item-name">
                            Products
                        </li>
                        <li className="item-name">
                            Team
                        </li>
                        <li className="item-name">
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
            <div className="coordonnes">
                <div className="title">
                    Coordonnées
                </div>
                <div className="contact-header">
                    contact
                </div>
                <div className="contact-header contact1">
                    (237)687 091 407
                </div>
                <div className="contact-header contact2">
                    (237)683 520 976
                </div>
                <div className="contact-header mail-header">
                    Mail
                </div>
                <div className="contact-header mail">
                    contact@alphadigitalservice.com
                </div>
                <div className="contact-header adress-header">
                    Adresse
                </div>
                <div className="contact-header adress">
                    Nv Route Bastos Immeuble FENA Rue 1770
                </div>
                
            </div>
            <div className="liens-rapide">
                <div className="title">
                    Nos services
                </div>
                <div className="liens">
                    <ul style={{marginLeft:-40}}>
                    {/*  */}
                        <li className="item-name">
                            Conception de Logiciels
                        </li>
                        <li className="item-name">
                            Web development
                        </li>
                        <li className="item-name">
                            Conception d'applications
                        </li>
                        <li className="item-name">
                            Community management
                        </li>
                        <li className="item-name">
                            AudioVisuel
                        </li>
                        <li className="item-name">
                            Cybersécurité
                        </li>
                        <li className="item-name">
                            Marketing digital
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
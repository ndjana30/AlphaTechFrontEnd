import { Link } from "react-router-dom";
export default function About_description()
{
    return (
        <div className="description">
            <div className="about-header">
                <span>| A propos</span>
            </div>
            <div className="subheader">
                <span className="subheader-text">C'est quoi Alpha Digital Services ?</span>
            </div>
            <div className="text">
                <span>
                    Elle se specialise dans la production et la maintenance d'applications mobiles, de logiciels et de sites internet, ainsi que dans la cybersécurité, le marketing digital, la gestion de communauté et la production audiovisuelle. Ils offrent des services de qualité supeérieure pour répondre aux besoins de leurs clients en matière de technologie et de communication.
                </span>
            </div>
            <div className="button">
                <a className="button-text" href="#">Contact Us</a>
            </div>
        </div>
    )
}
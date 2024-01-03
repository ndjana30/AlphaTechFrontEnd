import { Link } from "react-router-dom";
import About_description from "../components/normal_components/About_description";
import Image_rotation from "../components/normal_components/Image_rotation";
import Footer from "../components/normal_components/Footer";
export default function About()
{
    return (
        <body>
            <Image_rotation/>
            <About_description/>
            <Footer/>
        </body>
    )
}
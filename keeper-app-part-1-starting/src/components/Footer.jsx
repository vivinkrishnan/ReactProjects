import react from "react";

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.



function Footer(){
    const currYear = new Date().getFullYear();
    return(
        <div>
        <footer>
            <p>Copyright ⓒ {currYear}</p>
        </footer>
        </div>    
    );
}

export default Footer;
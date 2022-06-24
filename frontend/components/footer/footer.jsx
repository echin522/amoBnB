import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from "react-icons/md";
import { GiHedgehog } from "react-icons/gi";
import { FaAngellist } from "react-icons/fa";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id='footer'>
                <a href='https://github.com/echin522/amoBnB'><BsGithub/> Github</a>
                <a href='https://www.linkedin.com/in/edgarchin/'><BsLinkedin/> LinkedIn</a>
                <a href='https://echin522.github.io/'><GiHedgehog/> Portfolio</a>
                <a href='mailto: echin522@gmail.com'><MdEmail/> Email</a>
                <a href='https://angel.co/u/edgar-chin-1'><FaAngellist/> Angellist</a>
            </section>
        )
    }
}

export default Footer;
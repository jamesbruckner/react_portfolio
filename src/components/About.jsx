import Footer from './Footer'
import { Image } from "react-bootstrap";

function About() {
    return (
        <div className='body'>
            <div className='container'>
            <img src="https://i.ibb.co/rtpnsc5/3706-E61-E-FB8-A-4-DE5-93-ED-F22364936146.jpg" alt="3706-E61-E-FB8-A-4-DE5-93-ED-F22364936146" className='image img-thumbnail' width="25%"/>
            <p className='bio'>
            <h1 className='hero'>James Bruckner</h1>
               My name is James Bruckner and I am a Junior Software Developer. I graduated from the University of Denver's Web Development Bootcamp in Spring 2024. I'm a curious indiviual with a wide variety of life experiences. My goal is to improve the lives of people using my applications and programs, whether they be consumers or creators and workers.
            </p>
            </div>
        </div>
    );
}

export default About;
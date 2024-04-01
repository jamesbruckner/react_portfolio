import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
           <div className='nav-div'>
            <ul className='nav-list'>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/portfoliopage">Portfolio</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
           </div>
    );
};

export default Navigation;
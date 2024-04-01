import { useState } from 'react';


export default function Contact() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUsername(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email || !username) {
            setErrorMessage('Invalid email or username.');
            return;
        }

        setUsername('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='container'>
            <h1>Contact Me</h1>
            <form className='form' onSubmit={handleFormSubmit}>
                <input 
                    value={username} 
                    name="username"
                    className='contact-input'
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Name' />
                <input 
                    value={email} 
                    name="email"
                    className='contact-input'
                    onChange={handleInputChange}
                    type="email"
                    placeholder='Email' />
                <textarea
                    defaultValue={message}
                    name="message"
                    className='contact-text'
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Message'/>
                    <button className="button" type="submit">
                        Submit
                    </button>
            </form>
            {/* {errorMessage && (
                <>
                    <p className='error-text'>{errorMessage}</p>
            )}; */}
        </div>
    );
}
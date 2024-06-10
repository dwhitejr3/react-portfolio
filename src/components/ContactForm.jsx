import { useState } from 'react';

function ContactFrom(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        setInput(e.target.value)
    };
    return(
        <div>
            <form className = "contact-form" onSubmit={handleSubmit}></form>
            <input
            type = "text"
            placeholder='Fill out contact form'
            value={input}
            name='text'
            className='contact-input'
            onChange={handleChange}
            ></input>
        </div>
    
);
}

export default ContactFrom;

    
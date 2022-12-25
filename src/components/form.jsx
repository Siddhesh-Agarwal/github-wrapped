import React, { useState } from 'react';
import Info from './Info.tsx';


export default function Form() {
    // Create a state for displaying the component
    // eslint-disable-next-line no-mixed-operators
    const [showComponent, setShowComponent] = useState(false);

    // Get the value of the input field and pass it to the Info component on submit
    const [value, setValue] = useState('');

    // Clear the input field on submit and pass to the addComponent
    const handleSubmit = () => {
        console.log(value);
        setShowComponent(true);
    }

    // Handle the change in the input field
    const handleChange = (e) => {
        setValue(e.target.value.toLowerCase());
        setShowComponent(false);
    }

    const clear = () => {
        setValue('');
        setShowComponent(false);
    }

    return (
        <div>
            <div className="input-group py-2 fs-4 mx-auto" style={{maxWidth: '48rem'}}>
                <span className="input-group-text" id="basic-addon1">@</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    id="username"
                    value={value}
                    onChange={handleChange}
                />
                <button onClick={() => clear()} className="btn btn-outline-danger" type="button">Clear</button>
                <button className="btn btn-outline-success" type="button" onClick={
                    () => { handleSubmit() }
                }>Submit</button>
            </div>
            {showComponent && <Info username={value} />}
        </div>
    )
}

import React, { useState } from 'react';
//@ts-ignore
import Info from './Info.tsx';

export default function Form() {
    // Create a state for displaying the component
    const [showComponent, setShowComponent] = useState<boolean>(false);

    // Get the value of the input field and pass it to the Info component on submit
    const [value, setValue] = useState<string>('')

    // Clear the input field on submit and pass to the addComponent
    const handleSubmit = () => {
        console.log(value);
        setShowComponent(true);
    }

    // Handle the change in the input field
    const handleChange = (e: any) => {
        setValue(e.target.value);
        setShowComponent(false);
    }

    const clear = () => {
        setValue('');
        setShowComponent(false);
    }

    return (
        <div>
            <div className="input-group py-2 fs-4 mx-auto" style={{ maxWidth: '48rem' }}>
                <span
                    className="input-group-text d-none d-sm-block pe-none">
                    @
                </span>
                <input
                    type="text"
                    className="form-control sm-rounded-start text-uppercase"
                    placeholder="Username"
                    aria-label="Username"
                    id="username"
                    value={value}
                    onChange={handleChange}
                />
                <button onClick={() => clear()} className="btn btn-outline-danger d-none d-sm-block" type="button">Clear</button>
                <button onClick={() => handleSubmit()} className="btn btn-outline-success" type="button">Submit</button>
            </div>
            {showComponent && <Info username={value} />}
        </div>
    )
}

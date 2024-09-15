import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
display: flex;
align-items: center;
justify-content: center;
position: relative;
text-transform: uppercase;
text-shadow: -15px 5px 20px;
font-size: 3rem;
margin-bottom: 10%;
`



const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <H1>User Onboarding Form</H1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        placeholder="Enter Name Here"
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Enter Email Here"
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Enter Password"
                    />
                </label>
                <label>Terms of Service:
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create User" />
            </form>
        </div>
    )
}

export default Form;
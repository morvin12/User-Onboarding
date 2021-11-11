import React from 'react';

const Form = (props) => {
    const { onChange, submit } = props;
    const { username, email, password, checked } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal= type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>User Onboarding Form</h1>
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
                        checked={checked}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create User" />
            </form>
        </div>
    )
}

export default Form;
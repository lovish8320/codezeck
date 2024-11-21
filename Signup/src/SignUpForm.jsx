import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);

    // Validation functions
    const validateName = (name) => /^[a-zA-Z\s]{2,50}$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const checkPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]+/)) strength++;
        if (password.match(/[A-Z]+/)) strength++;
        if (password.match(/[0-9]+/)) strength++;
        if (password.match(/[$@#&!]+/)) strength++;
        return strength;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (!validateName(fullName)) {
            setFullNameError('Please enter a valid name (2-50 characters, letters only)');
            isValid = false;
        } else setFullNameError('');

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        } else setEmailError('');

        const passwordStrengthLevel = checkPasswordStrength(password);
        setPasswordStrength(passwordStrengthLevel);
        if (passwordStrengthLevel < 3) {
            setPasswordError('Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters');
            isValid = false;
        } else setPasswordError('');

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords don't match");
            isValid = false;
        } else setConfirmPasswordError('');

        if (isValid) {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.some(user => user.email === email)) {
                setEmailError('An account with this email already exists');
                return;
            }

            users.push({ fullName, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created successfully! You can now log in.');
            window.location.href = 'login.html';
        }
    };

    return (
        <div className="container">
            <div className="left-side">
                <img src="https://virtina.com/wp-content/uploads/2021/04/02-1.png" alt="Company Logo" />
                
                <h2 style={{ color: 'black' }}>Join Our Community</h2>
                <p style={{ color: 'black' }}>
                    Create an account and start your journey with us. Unlock exclusive features and personalized experiences.
                </p>
            </div>
            <div className="right-side">
                <h2>Sign Up</h2>
                <p>Fill in your details to create your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        <label htmlFor="fullName">Full Name</label>
                        <div className="error">{fullNameError}</div>
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="email">Email address</label>
                        <div className="error">{emailError}</div>
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="password">Password</label>
                        <div
                            id="passwordStrength"
                            style={{
                                width: `${passwordStrength * 20}%`,
                                backgroundColor: ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#27ae60'][passwordStrength],
                            }}
                        ></div>
                        <div className="error">{passwordError}</div>
                    </div>
                    <div className="input-group">
                        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="error">{confirmPasswordError}</div>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="login-link">
                    <small>Already have an account? <a href="login.html">Login</a></small>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;

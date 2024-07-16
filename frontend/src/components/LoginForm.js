import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Set fadeIn to true after component mounts
        setFadeIn(true);
    }, []);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", { username, password });
            console.log(response.data);
            // Assuming successful login redirects to home page
            window.location.href = '/home';
        } catch (error) {
            console.error("Login error:", error.response.data.message);
            setError("Invalid username or password");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const styles = {
        container: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/dune.jpg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'blur(5px)',
        },
        formContainer: {
            zIndex: 1,
            width: '330px',
            padding: '20px',
            border: '1px solid #d9c52e',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            opacity: fadeIn ? 1 : 0,
            transition: 'opacity 0.5s',
        },
        title: {
            color: 'rgba(235, 177, 52,0.9)',
            textAlign: 'center',
            fontFamily: 'cursive',
            fontSize: '25px',
            marginBottom: '20px',
        },
        input: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '9px',
            padding: '10px',
            border: '1px solid #ccc',
            fontStyle: 'italic',
            marginBottom: '25px',
        },
        button: {
            width: '100%',
            backgroundColor: 'rgba(0, 0, 255, 0.7)',
            border: '1px solid transparent',
            marginTop: '25px',
            borderRadius: '9px',
            padding: '10px',
            marginTop: '15px',
            color: '#fff',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.background}></div>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>DUNE UNIVERSITY</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" className="form-control" value={username} onChange={handleUsernameChange} placeholder="Username" style={styles.input} />
                        </div>
                        <div>
                            <div style={{ position: 'relative' }}>
                                <input type={showPassword ? 'text' : 'password'} className="form-control" value={password} onChange={handlePasswordChange} placeholder="Password" style={styles.input} />
                                <button type="button" className="btn btn-outline-secondary" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', border: '1px solid #ccc', transform: 'translateY(-50%)' }}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" style={styles.button}>Login</button>
                        {error && <p className="text-danger">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
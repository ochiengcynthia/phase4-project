import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle login response
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={handleEmailChange} required />

      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} required />

      <button type="submit">Login</button>
    </form>
  );
};

const SignupForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age, id, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle signup response
        console.log(data);
        if (data.message === 'Registration Successful') {
          alert('Registration Successful');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSignupSubmit}>
      <h2>Sign Up</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} required />

      <label>Age:</label>
      <input type="text" value={age} onChange={handleAgeChange} required />

      <label>ID:</label>
      <input type="text" value={id} onChange={handleIdChange} required />

      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} required />

      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} required />

      <button type="submit">Sign Up</button>
    </form>
  );
};

const Home = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h1>Welcome to Fluffy Adoption Center</h1>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={handleToggleForm}>
        {showLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Home;

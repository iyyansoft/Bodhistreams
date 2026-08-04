import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Login.css';
import PageWrapper from '../components/PageWrapper';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Custom credentials: username = admin, password = admin@bodhistreams
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password === 'admin@bodhistreams') {
      sessionStorage.setItem('isInvoiceAuthenticated', 'true');
      setError('');
      // Redirect to invoice page or admin dashboard depending on intent
      navigate('/invoice');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <PageWrapper>
      <div className="login-page">
        <div className="login-glow-accent"></div>
        <div className="container">
          <motion.div 
            className="login-card-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="login-card glass-card">
              <div className="login-header">
                <img src="/bodhi1.png" alt="BodhiStreams Logo" className="login-logo" />
                <h2>Invoice Portal Access</h2>
                <p>Please log in using your administrator credentials</p>
              </div>

              <form onSubmit={handleLogin} className="login-form">
                {error && (
                  <motion.div 
                    className="login-error-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    ⚠️ {error}
                  </motion.div>
                )}

                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Authenticate Account
                </button>
              </form>

              <div className="login-hint">
                <p>💡 Hint: Username: <code>admin</code> | Password: <code>admin@bodhistreams</code></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;

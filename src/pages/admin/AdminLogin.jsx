import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Demo credentials - replace with actual API call
    if (email === 'admin@tourismparadise.com' && password === 'admin123') {
      // Store auth token in localStorage
      localStorage.setItem('adminToken', 'demo-admin-token-12345');
      localStorage.setItem('adminEmail', email);
      
      setTimeout(() => {
        setLoading(false);
        navigate('/TP-admin/dashboard');
      }, 1000);
    } else {
      setLoading(false);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-logo">
            <Lock size={40} />
          </div>
          <h1>Admin Login</h1>
          <p>Tourism Paradise Admin Portal</p>
        </div>

        <form onSubmit={handleLogin} className="admin-login-form">
          {error && <div className="admin-error-message">{error}</div>}
          
          <div className="admin-form-group">
            <label htmlFor="email">Email Address</label>
            <div className="admin-input-wrapper">
              <Mail className="admin-input-icon" size={20} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@tourismparadise.com"
                required
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label htmlFor="password">Password</label>
            <div className="admin-input-wrapper">
              <Lock className="admin-input-icon" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="admin-toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="admin-login-btn"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="admin-demo-credentials">
            <p><strong>Demo Credentials:</strong></p>
            <p>Email: admin@tourismparadise.com</p>
            <p>Password: admin123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

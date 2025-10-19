import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut, Users, ShoppingBag, DollarSign, TrendingUp,
  Calendar, MapPin, Home, Menu, X
} from 'lucide-react';
import './AdminDashboard.css';
import { Star } from 'lucide-react';



const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    const email = localStorage.getItem('adminEmail');
    
    if (!token) {
      navigate('/TP-admin/login');
    } else {
      setAdminEmail(email || 'Admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    navigate('/TP-admin/login');
  };

  const stats = [
    { title: 'Total Bookings', value: '1,234', icon: ShoppingBag, color: '#3b82f6' },
    { title: 'Total Revenue', value: '₹12,45,890', icon: DollarSign, color: '#10b981' },
    { title: 'Active Users', value: '567', icon: Users, color: '#f59e0b' },
    { title: 'Growth', value: '+23.5%', icon: TrendingUp, color: '#ef4444' },
  ];

  const recentBookings = [
    { id: 1, customer: 'John Doe', houseboat: 'Kerala Budget Houseboat', date: '2025-10-15', amount: '₹7,999' },
    { id: 2, customer: 'Jane Smith', houseboat: 'Luxury Top End Houseboat', date: '2025-10-16', amount: '₹15,999' },
    { id: 3, customer: 'Mike Johnson', houseboat: 'Houseboats in Alappuzha', date: '2025-10-17', amount: '₹9,499' },
    { id: 4, customer: 'Sarah Williams', houseboat: 'Budget Alleppey Boat House', date: '2025-10-18', amount: '₹6,799' },
  ];

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="admin-sidebar-header">
          <h2>Tourism Paradise</h2>
          <button 
            className="admin-sidebar-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="admin-sidebar-nav">
          <a href="#" className="admin-nav-item active">
            <Home size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="admin-nav-item">
            <ShoppingBag size={20} />
            <span>Bookings</span>
          </a>
          <a href="#" className="admin-nav-item">
            <MapPin size={20} />
            <span>Houseboats</span>
          </a>
          <a href="#" className="admin-nav-item">
            <Users size={20} />
            <span>Customers</span>
          </a>
          <a href="#" className="admin-nav-item">
            <Calendar size={20} />
            <span>Calendar</span>
          </a>
          <a href="#" className="admin-nav-item" onClick={() => navigate('/TP-admin/offers')}>
            <Star size={20} />
            <span>Offers</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main-content">
        {/* Top Bar */}
        <header className="admin-top-bar">
          <button 
            className="admin-mobile-menu-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={24} />
          </button>
          <h1>Dashboard</h1>
          <div className="admin-top-bar-actions">
            <span className="admin-user-email">{adminEmail}</span>
            <button onClick={handleLogout} className="admin-logout-btn">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="admin-stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="admin-stat-card">
                <div className="admin-stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  <Icon size={24} />
                </div>
                <div className="admin-stat-content">
                  <p className="admin-stat-title">{stat.title}</p>
                  <h3 className="admin-stat-value">{stat.value}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Bookings Table */}
        <div className="admin-table-container">
          <h2 className="admin-table-title">Recent Bookings</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Houseboat</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>#{booking.id}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.houseboat}</td>
                  <td>{booking.date}</td>
                  <td><strong>{booking.amount}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

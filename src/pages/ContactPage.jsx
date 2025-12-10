import React, { useState } from 'react';
import { Mail, Phone, MapPin, Plus } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const initialBranches = [
    {
      name: 'Tourism Paradise',
      address: 'Kaithavalappil Puthanveedu, <br />Thathampally P.O., <br />Alappuzha (Alleppey) District, <br />Kerala State, South India.',
      phone: '+919349401700',
      email: 'tourismparadiseajai@gmail.com',
    },
  ];

  const [branches, setBranches] = useState(initialBranches);
  const [showForm, setShowForm] = useState(false);
  const [newBranch, setNewBranch] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBranch((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // A simple validation to ensure required fields are not empty
    if (newBranch.name.trim() && newBranch.address.trim()) {
      setBranches([...branches, { ...newBranch, address: newBranch.address.replace(/\n/g, '<br />') }]);
      setNewBranch({ name: '', address: '', phone: '', email: '' }); // Reset form
      setShowForm(false); // Hide form after submission
    }
  };

  return (
    <div className="contact-page-container">
      {branches.map((branch, index) => (
        <div key={index} className="contact-card">
          <div className="contact-header">
            <h1>{branch.name}</h1>
            <p>Registered Address</p>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" />
              <p dangerouslySetInnerHTML={{ __html: branch.address }} />
            </div>
            {branch.phone && (
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <a href={`tel:${branch.phone}`}>{branch.phone}</a>
              </div>
            )}
            {branch.email && (
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <a href={`mailto:${branch.email}`}>{branch.email}</a>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="add-branch-section">
        {!showForm && (
          <button className="add-branch-button" onClick={() => setShowForm(true)}>
            <Plus size={20} />
            Add New Branch
          </button>
        )}

        {showForm && (
          <div className="contact-card add-branch-form-card">
            <div className="contact-header">
              <h2>Add New Branch</h2>
            </div>
            <form onSubmit={handleSubmit} className="add-branch-form">
              <div className="form-group">
                <label htmlFor="name">Branch Name *</label>
                <input type="text" id="name" name="name" value={newBranch.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea id="address" name="address" value={newBranch.address} onChange={handleInputChange} rows="4" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={newBranch.phone} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={newBranch.email} onChange={handleInputChange} />
              </div>
              <button type="submit" className="submit-branch-button">
                Add Branch
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
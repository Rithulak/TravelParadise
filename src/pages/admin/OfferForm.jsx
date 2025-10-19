// src/pages/admin/OfferForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Edit,
  Trash2,
  Image as ImageIcon,
  Save,
  X,
  Upload,
  LogOut,
  Menu,
} from "lucide-react";
import "./OfferForm.css";

const BASE_URL = "http://localhost:8080/TP-admin";

export default function OfferForm() {
  const [offers, setOffers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    imagePath: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Load offers from backend
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/TP-admin/login");
      return;
    }

    fetch(`${BASE_URL}/offers`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch offers");
        return res.json();
      })
      .then((data) => setOffers(data))
      .catch((err) => console.error("Error loading offers:", err));
  }, [navigate]);

  // ✅ Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    setFormData({ ...formData, imagePath: file });

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  // ✅ Submit offer (add / update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return alert("Please enter a title");

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    if (formData.imagePath) formDataToSend.append("image", formData.imagePath);

    setLoading(true);
    try {
      let url, method;
      if (editingId) {
        url = `${BASE_URL}/updateOffer/${editingId}`;
        method = "PUT";
      } else {
        url = `${BASE_URL}/addOffer`;
        method = "POST";
      }

      const res = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (!res.ok) throw new Error("Failed to save offer");

      const savedOffer = await res.json();

      if (editingId) {
        // Update existing offer in UI
        setOffers((prev) =>
          prev.map((o) => (o.id === editingId ? savedOffer : o))
        );
      } else {
        // Add new offer to UI
        setOffers((prev) => [...prev, savedOffer]);
      }

      resetForm();
    } catch (err) {
      console.error(err);
      alert("Error saving offer");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete offer
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this offer?")) return;

    try {
      const res = await fetch(`${BASE_URL}/deleteOffer/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete offer");

      setOffers((prev) => prev.filter((offer) => offer.id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting offer");
    }
  };

  // ✅ Edit offer
  const handleEdit = (offer) => {
    setFormData({ title: offer.title, imagePath: null });
    setImagePreview(`http://localhost:8080/TourismParadise/image/${offer.imagePath}`); // adjust path if different
    setEditingId(offer.id);
    setShowForm(true);
  };

  // ✅ Helpers
  const resetForm = () => {
    setFormData({ title: "", imagePath: null });
    setImagePreview(null);
    setShowForm(false);
    setEditingId(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    navigate("/admin/login");
  };

  // ✅ JSX layout
  return (
    <div className="offer-form-container">
      <header className="offer-top-bar">
        <div className="offer-top-left">
          <button
            onClick={() => navigate("/TP-admin/dashboard")}
            className="offer-back-btn"
          >
            <Menu size={20} />
            Dashboard
          </button>
          <h1>Manage Offers</h1>
        </div>
        <button onClick={handleLogout} className="offer-logout-btn">
          <LogOut size={20} />
          Logout
        </button>
      </header>

      <div className="offer-content">
        {!showForm && (
          <button onClick={() => setShowForm(true)} className="offer-add-btn">
            <Plus size={20} /> Add New Offer
          </button>
        )}

        {showForm && (
          <div className="offer-form-card">
            <div className="offer-form-header">
              <h2>{editingId ? "Edit Offer" : "Create New Offer"}</h2>
              <button onClick={resetForm} className="offer-close-btn">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="offer-form">
              <div className="offer-form-group">
                <label htmlFor="title">Offer Title *</label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Enter offer title"
                  required
                />
              </div>

              <div className="offer-form-group">
                <label>Offer Image *</label>
                <div className="offer-image-upload">
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="imageUpload" className="offer-upload-label">
                    <Upload size={24} />
                    <span>Click to upload image</span>
                  </label>

                  {imagePreview && (
                    <div className="offer-image-preview">
                      <img src={imagePreview} alt="Preview" />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData({ ...formData, imagePath: null });
                        }}
                        className="offer-remove-image"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="offer-form-actions">
                <button
                  type="button"
                  onClick={resetForm}
                  className="offer-cancel-btn"
                >
                  Cancel
                </button>
                <button type="submit" disabled={loading} className="offer-submit-btn">
                  <Save size={18} />
                  {loading
                    ? "Saving..."
                    : editingId
                    ? "Update Offer"
                    : "Create Offer"}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="offer-list">
          <h2 className="offer-list-title">All Offers ({offers.length})</h2>
          {offers.length === 0 ? (
            <div className="offer-empty-state">
              <ImageIcon size={48} />
              <p>No offers yet. Create your first offer!</p>
            </div>
          ) : (
            <div className="offer-grid">
              {offers.map((offer) => (
                <div key={offer.id} className="offer-card">
                  <div className="offer-card-image">
                    <img
                      src={`http://localhost:8080/TourismParadise/image/${offer.imagePath}`}
                      alt={offer.title}
                      onError={(e) => (e.target.src = "/fallback.jpg")}
                    />
                  </div>
                  <div className="offer-card-content">
                    <h3>{offer.title}</h3>
                    <small>
                      Created:{" "}
                      {new Date(offer.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="offer-card-actions">
                    <button
                      onClick={() => handleEdit(offer)}
                      className="offer-edit-btn"
                    >
                      <Edit size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(offer.id)}
                      className="offer-delete-btn"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

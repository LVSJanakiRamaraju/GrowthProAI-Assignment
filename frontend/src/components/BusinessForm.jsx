import React, { useState } from 'react';
import axios from 'axios';
import DisplayCard from './DisplayCard';


const BusinessForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !location) return;

    try {
      setLoading(true);
      const API = import.meta.env.VITE_API;
      const res = await axios.post(`${API}/business-data`, {
        name,
        location
      });
      setBusinessData({ ...res.data, name, location });
    } catch (err) {
      console.error('Error fetching business data:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Local Business Dashboard</h2>
        <input
          type="text"
          placeholder="Business Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

        {businessData && (
        <DisplayCard
          data={businessData}
        />
      )}
    </div>
  );
};

export default BusinessForm;

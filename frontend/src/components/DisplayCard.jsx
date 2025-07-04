import React from 'react';

const DisplayCard = ({ data, onRegenerate }) => {
  return (
    <div className="mt-6 border-t pt-4 space-y-2">
      <p><strong>Business:</strong> {data.name}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>Google Rating:</strong> {data.rating}</p>
      <p><strong>Reviews:</strong> {data.reviews}</p>
      <p><strong>SEO Headline:</strong> {data.headline}</p>

       <button
        onClick={onRegenerate}
        className="mt-2 bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700"
       >
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default DisplayCard;

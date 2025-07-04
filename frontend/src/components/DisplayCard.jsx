import React from 'react';

const DisplayCard = ({ data }) => {
  return (
    <div className="mt-6 border-t pt-4 space-y-2">
      <p><strong>Business:</strong> {data.name}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>Google Rating:</strong> {data.rating}</p>
      <p><strong>Reviews:</strong> {data.reviews}</p>
      <p><strong>SEO Headline:</strong> {data.headline}</p>

    </div>
  );
};

export default DisplayCard;

import React from 'react';
import BusinessForm from './components/BusinessForm';
import businessImage from '../src/assets/business.svg';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 flex flex-col-reverse md:grid md:grid-cols-2 gap-8">
        
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Business Dashboard</h1>
          <BusinessForm />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={businessImage}
            alt="Business Visual"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>

      </div>
    </div>
  );
};

export default App;

import React, { createContext, useContext, useEffect, useState } from 'react';

const LOCAL_KEY = 'growthproai';

const BusinessContext = createContext();

export const useBusiness = () => useContext(BusinessContext);

export const BusinessProvider = ({ children }) => {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) setBusinessData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (businessData) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(businessData));
    }
  }, [businessData]);

  return (
    <BusinessContext.Provider value={{ businessData, setBusinessData, loading, setLoading }}>
      {children}
    </BusinessContext.Provider>
  );
};

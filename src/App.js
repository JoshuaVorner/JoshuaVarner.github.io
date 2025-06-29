
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const principal = 17600;
  const annualRate = 0.17;
  const startDate = new Date("2023-04-22T00:00:00");

  const [balance, setBalance] = useState(principal);

  useEffect(() => {
    const updateBalance = () => {
      const now = new Date();
      const timeElapsed = (now - startDate) / (1000 * 60 * 60 * 24 * 365.25);
      const accrued = principal * Math.pow(1 + annualRate, timeElapsed);
      setBalance(accrued);
    };

    updateBalance();
    const interval = setInterval(updateBalance, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App" style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', color: 'white', minHeight: '100vh' }}>
      <h1>💸 Real-Time Loan Balance</h1>
      <p>Original Loan: ${principal.toLocaleString()}</p>
      <p>Interest Rate: {(annualRate * 100).toFixed(2)}% annually</p>
      <p>Start Date: {startDate.toDateString()}</p>
      <div style={{ fontSize: '2rem', marginTop: '1rem' }}>
        Current Balance: ${balance.toFixed(2)}
      </div>
    </div>
  );
}

export default App;

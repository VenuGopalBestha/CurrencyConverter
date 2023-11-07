import React from 'react';

const CurrencyConverterInfo = () => {
  // Replace these placeholders with actual information
  const currentDateTime = new Date().toLocaleString(); // Date and time of conversion
  
  const feesAndCharges = '0.5%'; // Example fees and charges
  const disclaimerText = 'This converter is for reference purposes only.';

  return (
    <div className="container mt-3" style={{ backgroundColor: 'lightgray', padding: '20px' }}>
      <p>Date and Time of Conversion: {currentDateTime}</p>
      
      <p>Fees and Charges: {feesAndCharges}</p>
      <p>Disclaimer: {disclaimerText}</p>
      <p>Contact Us: <a href="besthavenu228@gmail.com">contact@example.com</a></p>
      <p>Privacy Policy | Terms of Use</p>
      <p>Currency Converter Updates: Rates are updated every 30 minutes.</p>
      <p>About Our Application: Learn more about our application and its features.</p>
    </div>
  );
};

export default CurrencyConverterInfo;

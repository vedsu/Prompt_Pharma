// src/components/OrderForm.js
import React from 'react';
import './OrderForm.css';

function OrderForm() {
  const handleDownloadPDF = () => {
    // You can implement the logic to generate a PDF here
    // For simplicity, a static PDF file is used in this example
    const pdfUrl = '/path/to/your/order-form-template.pdf';

    // Triggering the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'order-form.pdf';
    link.click();
  };

  return (
    <div className="order-form-container">
      <h2>Order Form</h2>

      <form>
        {/* Include your order form fields here */}
        <div className="form-field">
          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" />
        </div>

        {/* Add more form fields as needed */}

        <button type="button" onClick={handleDownloadPDF}>
          Download Order Form (PDF)
        </button>
      </form>
    </div>
  );
}

export default OrderForm;

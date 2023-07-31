import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input type="text"value={text}onChange={handleInputChange}placeholder="Enter text or URL" />
      {text && <QRCode value={text} />}
    </div>
  );
};

export default QRCodeGenerator;

import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
    const feedbackFormUrl = 'https://your-feedback-form-url.com'; // Replace with your feedback form URL

    const downloadQR = () => {
        const canvas = document.getElementById('qr-code');
        const pngUrl = canvas.toDataURL();
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'QRCode.png';
        downloadLink.click();
    };

    const printQR = () => {
        const canvas = document.getElementById('qr-code');
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print QR Code</title></head><body>');
        printWindow.document.write('<img src="' + canvas.toDataURL() + '" /></body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div>
            <h2>Scan the QR Code to access the Feedback Form</h2>
            <QRCode id='qr-code' value={feedbackFormUrl} size={256} />
            <div>
                <button onClick={downloadQR}>Download QR Code</button>
                <button onClick={printQR}>Print QR Code</button>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
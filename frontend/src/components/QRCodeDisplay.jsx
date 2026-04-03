import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeDisplay = () => {
    const feedbackFormUrl = 'https://your-feedback-form-url.com'; // Replace with your actual feedback form URL

    const handleDownload = () => {
        const canvas = document.getElementById('qr-code');
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'QRCode.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const handlePrint = () => {
        const canvas = document.getElementById('qr-code');
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print QR Code</title></head><body>');
        printWindow.document.write('<img src="' + canvas.toDataURL() + '">');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div>
            <h1>Feedback QR Code</h1>
            <QRCode id='qr-code' value={feedbackFormUrl} size={256} />
            <div>
                <button onClick={handleDownload}>Download QR Code</button>
                <button onClick={handlePrint}>Print QR Code</button>
            </div>
        </div>
    );
};

export default QRCodeDisplay;

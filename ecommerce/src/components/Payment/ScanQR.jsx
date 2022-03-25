import React from 'react';
import QRCode from 'react-qr-code';



const QRCodePayment = () => {
    const downloadQR = () => {
        const canvas = document.getElementById('qrcode');
        const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        console.log('pngUrl', pngUrl);
        let downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'viblo-tranchien.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div className='qrcode-payment'>

            <header className='qrcode-payment-header'>
                <div>
                <QRCode
                    id='qrcode'
                    value='https://momo.vn/'
                    size={290}
                    level={'H'}
                    includeMargin={true}
                />
                <br />
                <a onClick={downloadQR}> Download QR </a>
                </div>
            </header>
        </div>
    );
}

export default QRCodePayment;
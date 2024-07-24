import React, { useState } from 'react';
import Toast from './Toast';

const ToastContainer = () => {
    const [toastMessage, setToastMessage] = useState('');

    const showToast = (message:string) => {
        setToastMessage(message);
    };

    const hideToast = () => {
        console.log('clearing message');
        
        setToastMessage('');
    };

    return (
        <div>
            <h1>Toast Example</h1>
            <button onClick={() => showToast('This is a toast message!')}>Show Toast</button>
            {toastMessage && <Toast message={toastMessage} onClose={hideToast} />}
        </div>
    );
};

export default ToastContainer;

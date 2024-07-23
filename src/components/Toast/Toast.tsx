import React, { useState, useEffect } from 'react';

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        // return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <div style={styles.toast}>
            {message}
        </div>
    );
};

const styles = {
    toast: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        zIndex: 1000,
    },
};

export default Toast;

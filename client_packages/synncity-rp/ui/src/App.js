import React, { useState } from 'react';

function App() {
    const [visible, setVisible] = useState(false);

    // Toggle debug panel visibility
    const toggleVisibility = () => setVisible((prev) => !prev);

    return (
        <div>
            <button
                onClick={toggleVisibility}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    padding: '10px',
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Toggle Debug
            </button>

            {visible && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50px',
                        left: '10px',
                        padding: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        borderRadius: '5px',
                    }}
                >
                    <p>Rockstar ID: N/A</p>
                    <p>Position: X: 0, Y: 0, Z: 0</p>
                    <p>Speed: 0 MPH</p>
                </div>
            )}
        </div>
    );
}

export default App;

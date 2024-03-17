import React from 'react';

const Map = () => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCyIbtv5aLtHXXxoPtEzYDfzpRUDL27hGA&center=-12.112721%2C-77.012128&zoom=16`}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Map;

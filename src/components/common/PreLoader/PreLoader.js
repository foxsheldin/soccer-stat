import React from 'react';
import preloader from '../../../assets/images/Eclipse-1s-200px.svg';

function PreLoader() {
    return (
        <div style={{ textAlign: 'center' }}>
            <img src={preloader} />
        </div>
    )
}

export default PreLoader

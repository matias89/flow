import { useState } from 'react';
import Dropdown from 'components/Dropdown/Dropdown';
import { CITIES } from 'constants/index';

import './styles.css';

interface ICitySelector {
    onSelect: (e: any) => void;
};

const CitySelector = ({ onSelect }: ICitySelector) => {
    const [location, setLocation] = useState('');
    const handleOnSelect = (value: string) => {
        setLocation(value);
    };

    const handleOnClick = () => {
        onSelect(location);
    };

    return (
        <div className="city-selector-container">
            <h4>Seleccionar ciudad</h4>
            <div className="city-selector-search">
                <Dropdown
                    items={CITIES}
                    onSelect={handleOnSelect}
                />
                <button onClick={handleOnClick}>Buscar</button>
            </div>
        </div>
    );
};

export default CitySelector;

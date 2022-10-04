import './styles.css';

interface IItem {
    name: string;
    lat: number;
    lon: number;
};

interface IItems {
    items: Array<IItem>;
    onSelect: (e: any) => void;
    label?: string;
};

const Dropdown = ({ items, onSelect, label }: IItems) => {
    const handleOnChange = (e: any) => {
        const [lat, lon] =  e.target.value.split('&');
        onSelect({
            lat, lon,
        });
    }
    return (
        <div className="dropdown-container">
            {label && <label htmlFor="standard-select">{label}</label>}
            <div className="select">
                <select onChange={handleOnChange} id="standard-select">
                    {items.map(({ name, lat, lon }) => (
                        <option key={`${lat}_${lon}`} value={`${lat}&${lon}`}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Dropdown;

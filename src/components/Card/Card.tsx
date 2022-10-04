import { formatDate, formatDay } from 'utils/date';

import './styles.css';

export interface ICard {
    name?: string;
    description?: string;
    coord?: Object;
    min: number;
    max: number;
    sunrise?: number;
    sunset?: number;
    pressure?: number;
    temp?: number;
    icon?: string;
    weather?: any;
    main?: any;
    dt?: any;
    highlighted?: boolean;

};

const Card = ({
    name, description, coord, min, max, sunrise, sunset, pressure, temp, icon, dt, highlighted,
}: ICard) => (
    <div className="card-container">
        <div>
            {name && <h2>{name}</h2>}
            {highlighted && <hr />}
            <img src={`http://openweathermap.org/img/wn/${icon}@${highlighted ? 4 : 2}x.png`} alt={description} />
            {!highlighted && <hr />}
            </div>
        <div>
            {description && <h3>{description}</h3>}
            {temp && <p><b>Actual</b>: {temp}º C</p>}
            {dt && <p><b>{formatDay(dt)}</b></p>}
            <p><b>Mín</b>: {min}º C</p>
            <p><b>Máx</b>: {max}º C</p>
            <p><b>Amanece</b>: {formatDate(sunrise)}</p>
            <p><b>Anochece</b>: {formatDate(sunset)}</p>
            <p><b>Presión</b>: {pressure} hp</p>
        </div>
    </div>
);

export default Card;

import './styles.css';

interface ISpinner {
    text?: string;
}

const Spinner =  ({ text }: ISpinner) => (
    <div className="spinner-container">
        <p>{text ? text : 'Cargando...'}</p>
        <div className="loader" />
    </div>
);

export default Spinner;

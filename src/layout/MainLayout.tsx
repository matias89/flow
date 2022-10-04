import './styles.css';

interface IMainLayout {
    children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: IMainLayout) => (
    <>
        <main>
            <div className="container">
                {children}
            </div>
        </main>
        <footer>Creado por Matías Aybar</footer>
    </>
);

export default MainLayout;

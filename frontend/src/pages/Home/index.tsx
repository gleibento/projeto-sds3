import 'bootstrap/dist/css/bootstrap.css';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <main>
                    <h3>Conteudos</h3>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Home;

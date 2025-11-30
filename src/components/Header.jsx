import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Joseph Watson's Jolly Walrus || ITIS 3135</h1>
            <nav>
                <Link to="/">Home </Link>
                ||
                <Link to="/introduction"> Introduction </Link>
                ||
                <Link to="/contract"> Contract</Link>
            </nav>

             <hr class="divider"></hr>
        </header>
    );
}

export default Header;
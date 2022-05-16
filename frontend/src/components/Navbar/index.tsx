import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './styles.css'


function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <a href="/"><h1>DSMovie</h1></a>
                    <a href="https://github.com/jean2q">
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p>/jean2q</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>);
}

export default Navbar;
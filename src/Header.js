import { useState } from 'react';
import { Link } from 'react-router-dom';

const pages = [
    { name: "Portfolio - Landscapes", url: "portfolio", tags: "mountains, city, sun, waves, ideas" },
    { name: "Pricing & Packages", url: "pricing", tags: "cost, silver, gold, wedding" },
    { name: "About Slav Photography", url: "about", tags: "biography, story, freshman" },
    { name: "Contact Me", url: "contact", tags: "email, phone, booking" },
    { name: "Home", url: "/", tags: "main, gallery" }
];

function Header() {
    const [query, setQuery] = useState('');

    const matches = pages.filter(page =>
        query.length > 0 && (
            page.name.toLowerCase().includes(query.toLowerCase()) ||
            page.tags.toLowerCase().includes(query.toLowerCase())
        )
    );

    return (
        <header>
            <nav>
                <Link to="/" className="logo">Slav Photography</Link>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/pricing">Packages</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="search-site">
                        <input
                            type="text"
                            id="searchBar"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {matches.length > 0 && (
                            <div className="search-results">
                                {matches.map(match => (
                                    <a key={match.url} href={match.url} className="search-item">
                                        <strong>{match.name}</strong>
                                    </a>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Header;
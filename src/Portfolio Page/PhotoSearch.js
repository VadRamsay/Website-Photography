import { useState } from 'react';

function PhotoSearch() {
    const [query, setQuery] = useState(''); // what the user types
    const [photos, setPhotos] = useState([]); // holds the results

    // Fetch function
    function searchPhotos() {
        fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=8&client_id=TPeoBJ2BnMz3HFXhIj8PhKIhf1N8pJi4tYfoVXNVjwM`)
            .then(response => response.json())
            .then(data => setPhotos(data.results));
    }

    return (
        <section className="main-search">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Photos"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={searchPhotos}>Search</button>
            </div>

            <div className="photo-results">
                {photos.map(photo => (
                    <div key={photo.id} className="photo-card">
                        <a href={photo.links.html} rel="noopener noreferrer">
                            <img src={photo.urls.small} alt={photo.alt_description} />
                            <div className="photo-info">
                                <p>{photo.alt_description}</p>
                                <small>By {photo.user.name}</small>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

        </section>
    )
}



export default PhotoSearch;
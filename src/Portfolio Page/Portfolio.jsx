import Gallery from "./Gallery";
import PhotoSearch from "./PhotoSearch";
import Hero from "./Hero";
import './Portfolio.css';


function Portfolio() {
    return (
        <div className="page-container">
            <Gallery />
            <PhotoSearch />
            <Hero />
        </div>
    )
}

export default Portfolio;
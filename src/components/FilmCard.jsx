
import { Link } from "react-router";

const FilmCard = ({ film }) => {
    return (
        <Link to={`/film/${film.id}`}>
            <div className="coin-card">
                <div className="coin-header">
                    <img
                        src={film.image}
                        alt={film.title}
                        className="coin-image"
                    />

                    <div>
                        <h2>{film.title}</h2>
                        <p className="symbol">{film.release_date}</p>
                    </div>
                </div>

                <p>Director: {film.director}</p>

                <p>Producer: {film.producer}</p>

                <p>Rating: {film.rt_score}%</p>
            </div>
        </Link>
    );
};

export default FilmCard;

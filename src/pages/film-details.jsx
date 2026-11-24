
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

const API_URL = "https://ghibliapi.vercel.app/films";

const FilmDetailsPage = () => {
    const { id } = useParams();

    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(API_URL);
    console.log(id);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                console.log(API_URL);

                const res = await fetch(`${API_URL}/${id}`);

                if (!res.ok) {
                    throw new Error("Failed to fetch the data");
                }

                const data = await res.json();

                console.log(data);
                setFilm(data);
            } catch (err) {
                console.log(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFilm();
    }, [id]);

    return (
        <div className="coin-details-container">
            <Link to="/">Back to Home</Link>

            <h1 className="coin-detail-title">
                {film ? film.title : "Film Details"}
            </h1>

            {loading && <p>Loading...</p>}

            {error && <div className="error">{error}</div>}

            {!loading && !error && film && (
                <>
                    <img
                        src={film.image}
                        alt={film.title}
                        className="coin-details-image"
                    />

                    <p>{film.description}</p>

                    <div className="coin-details-info">
                        <h3>Original Title: {film.original_title}</h3>

                        <h4>Director: {film.director}</h4>

                        <h4>Producer: {film.producer}</h4>

                        <h4>Release Date: {film.release_date}</h4>

                        <h4>Running Time: {film.running_time} minutes</h4>

                        <h4>Rating: {film.rt_score}%</h4>
                    </div>
                </>
            )}

            {!loading && !error && !film && (
                <p>No Data Found!</p>
            )}
        </div>
    );
};

export default FilmDetailsPage;

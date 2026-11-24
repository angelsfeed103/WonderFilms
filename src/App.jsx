
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

const API_URL = "https://ghibliapi.vercel.app/films";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/not-found";
import FilmDetailsPage from "./pages/film-details";

import Header from "./components/Header";

const App = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(10);
    const [filter, setFilter] = useState("");

    // when app mounts
    useEffect(() => {
        fetch(`${API_URL}?limit=${limit}`)
            .then((res) => {
                if (!res.ok) throw new Error("Fail to fetch data!");
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setFilms(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [limit]);

    return (
        <>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            films={films}
                            filter={filter}
                            setFilter={setFilter}
                            limit={limit}
                            setLimit={setLimit}
                            loading={loading}
                            error={error}
                        />
                    }
                />

                <Route path="/about" element={<AboutPage />} />

                <Route
                    path="/film/:id"
                    element={<FilmDetailsPage />}
                />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default App;

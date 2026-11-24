
import FilmCard from "../components/FilmCard";
import FilterInput from "../components/FilterInput";

const HomePage = ({
    films,
    filter,
    setFilter,
    limit,
    setLimit,
    loading,
    error
}) => {
    const filterFilms = films.filter((film) => {
        return (
            film.title.toLowerCase().includes(filter.toLowerCase()) ||
            film.director.toLowerCase().includes(filter.toLowerCase())
        );
    });

    return (
        <div>
            <h1>WonderFilms</h1>

            {loading && <p>Loading...</p>}

            {error && <div className="error">{error}</div>}

            <div className="top-controls">
                <FilterInput
                    filter={filter}
                    onFilterChange={setFilter}
                />

                <div className="controls">
                    <label htmlFor="limit">Show: </label>

                    <select
                        value={limit}
                        id="limit"
                        onChange={(e) => setLimit(Number(e.target.value))}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

            {!loading && !error && (
                <main className="grid">
                    {filterFilms.map((film) => (
                        <FilmCard
                            film={film}
                            key={film.id}
                        />
                    ))}
                </main>
            )}
        </div>
    );
};

export default HomePage;

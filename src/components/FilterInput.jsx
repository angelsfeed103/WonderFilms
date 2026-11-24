
const FilterInput = ({ filter, onFilterChange }) => {
    return (
        <div className="filter">
            <input
                type="text"
                value={filter}
                placeholder="Filter films by title or director"
                onChange={(e) => onFilterChange(e.target.value)}
            />
        </div>
    );
};

export default FilterInput;

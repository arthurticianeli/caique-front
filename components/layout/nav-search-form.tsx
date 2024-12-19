const SearchForm: React.FC = () => {
    return (
        <form role="search">
            <div className="input-group d-flex align-items-center flex-nowrap bg-white">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Buscar"
                    aria-label="Buscar"
                />
                <button className="btn btn-outline-secondary " type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    );
};

export default SearchForm;

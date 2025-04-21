const ProductFilter = ({ categories, filters, setFilters }) => {
  const priceRanges = [
    { label: "All Prices", value: "" },
    { label: "Under $50", value: "0-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "$100 - $200", value: "100-200" },
    { label: "Over $200", value: "200-" },
  ];

  return (
    <div className="product-filter">
      <div className="filter-group">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          placeholder="Search products..."
          value={filters.searchQuery}
          onChange={(e) =>
            setFilters({ ...filters, searchQuery: e.target.value })
          }
        />
      </div>

      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price">Price Range</label>
        <select
          id="price"
          value={filters.priceRange}
          onChange={(e) =>
            setFilters({ ...filters, priceRange: e.target.value })
          }
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      <button
        className="btn btn-text"
        onClick={() =>
          setFilters({
            searchQuery: "",
            category: "",
            priceRange: "",
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFilter;

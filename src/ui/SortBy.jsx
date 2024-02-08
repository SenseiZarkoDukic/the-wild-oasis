import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sortBy") || options.at(0).value;

  function handleSortChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      type="white"
      value={currentSort}
      onChange={handleSortChange}
    />
  );
}

export default SortBy;

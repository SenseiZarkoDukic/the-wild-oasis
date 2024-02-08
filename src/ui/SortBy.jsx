import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ sortField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get(sortField) || options.at(0).value;

  function handleSortChange(e) {
    searchParams.set(sortField, e.target.value);
    setSearchParams(searchParams);
  }
  return <Select options={options} type="white" onChange={handleSortChange} />;
}

export default SortBy;

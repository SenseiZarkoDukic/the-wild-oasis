import Select from "./Select";

function SortBy({ options }) {
  function handleSortChange(e) {}
  return <Select options={options} type="white" onChange={handleSortChange} />;
}

export default SortBy;

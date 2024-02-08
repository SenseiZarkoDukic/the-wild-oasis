import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return <Spinner />;
  }

  const filterValue = searchParams.get("discount") || "all";

  // 1) FILTER CABINS
  let filteredCabins;
  if (filterValue === "all") {
    filteredCabins = cabins;
  }
  if (filterValue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }
  if (filterValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  // 2) SORT CABINS
  const sortField = searchParams.get("sort by name-asc") || "name-asc";

  if (sortField === "name-asc") {
    filteredCabins.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortField === "name-desc") {
    filteredCabins.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sortField === "regularPrice-asc") {
    filteredCabins.sort((a, b) => a.regularPrice - b.regularPrice);
  }
  if (sortField === "regularPrice-desc") {
    filteredCabins.sort((a, b) => b.regularPrice - a.regularPrice);
  }
  if (sortField === "maxCapacity-asc") {
    filteredCabins.sort((a, b) => a.maxCapacity - b.maxCapacity);
  }
  if (sortField === "maxCapacity-desc") {
    filteredCabins.sort((a, b) => b.maxCapacity - a.maxCapacity);
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;

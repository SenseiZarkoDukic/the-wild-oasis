import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import { useQueryClient } from "@tanstack/react-query";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  const cabins = useQueryClient().prefetchQuery("cabins", getCabins);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;

import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowForm((show) => !show)}>
        Add new cabin
      </Button>
      {showForm && <CreateCabinForm />}
    </div>
  );
}

export default AddCabin;

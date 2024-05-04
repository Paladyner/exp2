import { useEffect } from "react";
import { useState } from "react";

const CheckBoxGroup = ({ id }) => {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      id={id}
      className="w-5 h-5 border-gray-300 rounded"
      checked={checked}
      onClick={() => setChecked(!checked)}
    />
  );
};
export default CheckBoxGroup;

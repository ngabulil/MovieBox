import React from "react";
import InputType from "./InputType";
import { FaTrash } from "react-icons/fa";

const InfinityInput = ({ value, onChange, label, inputs, trigger }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const onAddRow = () => {
    onChange([...value, {}]);
  };

  const onDeleteRow = (index) => {
    const newValue = [...value];
    newValue.splice(index, 1);
    onChange(newValue);
  };

  const handleChange = (valueInput, e) => {
    const { name, id } = e.target;
    const newValue = [...value];
    newValue[id][name] = valueInput;
    onChange(newValue);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  React.useEffect(() => {
    if (trigger) {
      setIsClicked(true);
    }
  }, [trigger]);

  return (
    <div className="mb-2" onClick={handleClick}>
      <label className="text-sm mb-2 font-medium block">{label}</label>
      {(isClicked || trigger) && value.length < 1 && (
        <label className="block mb-2 text-sm font-medium text-red-500">
          Please Fill This Field
        </label>
      )}
      <div className="p-2 border-2 rounded-md">
        {value
          ? value.map((item, index) => (
              <div key={index} className="flex gap-4 items-center max-700:flex-col max-700:gap-0">
                {inputs.map((input, indexInput) => (
                  <InputType
                    value={item[input.name]}
                    onChange={handleChange}
                    id={index}
                    key={indexInput}
                    {...input}
                  />
                ))}
                <button onClick={() => onDeleteRow(index)}>
                  <FaTrash fill="red" />
                </button>
              </div>
            ))
          : null}
        <button onClick={onAddRow} className="text-[#BE123C] font-bold text-sm">Add Row</button>
      </div>
    </div>
  );
};

export default InfinityInput;

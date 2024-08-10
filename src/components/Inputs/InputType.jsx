import React from "react";

const InputType = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  trigger,
  max,
  ...props
}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    if (type === "number") {
      if (Number(value) > max) {
        return;
      }
    }
    if (value) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
    onChange(value, e);
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
    <div className="mb-2 w-full" onClick={handleClick}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      {(isClicked || trigger) && !value && (
        <label className="block mb-2 text-sm font-medium text-red-500">
          Please Fill This Field
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          autoComplete="off"
          required
          value={value}
          onChange={handleChange}
          {...props}
        />
      ) : (
        <input
          type={type || "text"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          autoComplete="off"
          required
          value={value}
          onChange={handleChange}
          {...props}
        />
      )}
    </div>
  );
};

export default InputType;

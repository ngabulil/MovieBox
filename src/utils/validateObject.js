export const validateObject = (obj) => {
  const validateObjectProps = (value) => {
    return Object.keys(value).every((subProp) => {
      const subValue = value[subProp];
      return (
        subValue !== undefined &&
        subValue !== null &&
        subValue.toString().trim() !== ""
      );
    });
  };

  return Object.keys(obj).every((prop) => {
    const value = obj[prop];

    if (Array.isArray(value)) {
      return (
        value.length > 0 &&
        value.every((item) => {
          if (typeof item === "object" && item !== null) {
            return Object.keys(item).length > 0 && validateObjectProps(item);
          }
          return (
            item !== undefined && item !== null && item.toString().trim() !== ""
          );
        })
      );
    }

    if (typeof value === "object" && value !== null) {
      return Object.keys(value).length > 0 && validateObjectProps(value);
    }

    return (
      value !== undefined &&
      value !== null &&
      value.toString().trim() !== "" &&
      value !== false
    );
  });
};

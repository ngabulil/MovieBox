const FieldItem = ({ label, value, prefix, suffix }) => {
  return (
    <div className="flex gap-4 items-center">
      <p className="font-bold text-lg text-nowrap">{label} :</p>
      <p className="font-bold text-lg text-[#BE123C]">{`${value && prefix ? prefix : ""} ${value || "-"} ${value && suffix ? suffix : ""}`}</p>
    </div>
  );
};

export default FieldItem;

import { components } from "react-select";
const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        style={{
          fill: "#fff",
          stroke: "#262626",
          width: "18px",
          height: "18px",
        }}
      >
        <use xlinkHref={`/icons/sprite.svg#icon-search`} />
      </svg>
    </components.DropdownIndicator>
  );
};
export default CustomDropdownIndicator;

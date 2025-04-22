import { components } from "react-select";
export const CustomDropdownIndicator = (props) => {
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
export const CustomClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <svg
        style={{
          fill: "#262626",
          stroke: "#262626",
          width: "20px",
          height: "20px",
          margin: "0",
        }}
      >
        <use xlinkHref={`/icons/sprite.svg#icon-x`} />
      </svg>
    </components.ClearIndicator>
  );
};

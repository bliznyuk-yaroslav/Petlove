import { components } from "react-select";
export const CustomSearchIndicator = (props) => {
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
          width: "18px",
          height: "18px",
          margin: "0",
          alignItems: "center",
        }}
      >
        <use xlinkHref={`/icons/sprite.svg#icon-cross-small-sea`} />
      </svg>
    </components.ClearIndicator>
  );
};
export const CustomDropdownIndicator = (props) => {
  const { selectProps } = props;
  return (
    <components.DropdownIndicator {...props}>
      <svg
        style={{
          stroke: "#262626",
          fill: "#fff",
          width: "20px",
          height: "20px",
          margin: "0",
          transform: selectProps.menuIsOpen ? "rotate(0deg)" : "rotate(180deg)",
        }}
      >
        <use xlinkHref={`/icons/sprite.svg#icon-chevron-down`} />
      </svg>
    </components.DropdownIndicator>
  );
};

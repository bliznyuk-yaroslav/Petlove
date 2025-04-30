const customerSelectStylesLocation = (isTablet) => ({
  control: (base, state) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: "30px",
    margin: "0",
    boxShadow: "none",
    outline: "none",
    cursor: "pointer",
    width: isTablet ? "295px" : "227px",
    height: isTablet ? "42px" : "48px",
    color: "rgba(38, 38, 38, 1)",
    fontFamily: "Manrope",
    fontSize: isTablet ? "14px" : "16px",
    fontWeight: "500",
    lineHeight: isTablet ? "18px" : "20px",
    position: "relative",
    transition: "border 0.3s ease",
    border: state.isFocused
      ? "1px solid rgba(246, 184, 61, 1)"
      : "1px solid transparent",
  }),
  option: (base) => ({
    cursor: "pointer",
    color: "rgba(38, 38, 38, 0.6)",
    fontFamily: "Manrope",
    fontSize: isTablet ? "14px" : "16px",
    fontWeight: "500",
    lineHeight: isTablet ? "18px" : "20px",
    letterSpacing: "-0.48px",
    marginBottom: "8px",
    "&:last-of-type": {
      marginBottom: 0,
    },
  }),
  menu: (base) => ({
    width: isTablet ? "295px" : "228px",
    marginTop: "4px",
    borderRadius: "15px",
    zIndex: 9999,
    backgroundColor: "#FFF",
    fontFamily: "Manrope",
    fontSize: isTablet ? "14px" : "16px",
    fontWeight: "500",
    lineHeight: isTablet ? "18px" : "20px",
    letterSpacing: "-0.48px",
    overflowY: "auto",
    boxSizing: "border-box",
    padding: "14px 8px 14px 14px",
  }),
  dropdownIndicator: (styles) => ({
    display: "flex",
    padding: isTablet ? "12px 12px 12px 4px" : "15px 14px 15px 4px",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  placeholder: (styles, state) => ({
    ...styles,
    color: "rgba(38, 38, 38, 1)",
    margin: "0",
    padding: "14px",
    display: state.isFocused ? "none" : "block",
  }),
  singleValue: (styles) => ({
    ...styles,
    padding: "14px",
    margin: "0",
    color: "rgba(38, 38, 38, 1)",
  }),
  input: (base) => ({
    ...base,
    padding: "14px",
    height: "48px",
    margin: 0,
    width: "100%",
    opacity: 1,
    color: "rgba(38, 38, 38, 1)",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,

    with: "100%",
    overflow: "hidden",
  }),
  menuList: (base) => ({
    ...base,

    "&::-webkit-scrollbar": {
      width: "8px",
      height: "100px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(38, 38, 38, 0.08)",
      borderRadius: "13px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555",
    },
  }),
  clearIndicator: (base, state) => ({
    padding: "0",
    margin: 0,
    display: "flex",
  }),
});

export default customerSelectStylesLocation;

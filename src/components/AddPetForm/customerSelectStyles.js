const customerSelectStyles = (isTablet) => ({
  control: (base, state) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: "30px",
    margin: "0",
    border:
      state.isFocused || state.isHovered
        ? "1px solid rgba(246, 184, 61, 1)"
        : "1px solid rgba(38, 38, 38, 0.15)",
    boxShadow: "none",
    cursor: "pointer",
    width: isTablet ? "143px" : "210px",
    height: isTablet ? "42px" : "48px",
    color: "rgba(38, 38, 38, 1)",
    fontFamily: "Manrope",
    fontSize: isTablet ? "14px" : "16px",
    fontWeight: "500",
    lineHeight: isTablet ? "18px" : "20px",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid rgba(246, 184, 61, 1)", // зміна бордера при ховері
    },
    "&:focus": {
      border: "1px solid rgba(246, 184, 61, 1)", // зміна бордера при фокусі
    },
  }),
  option: (_, state) => ({
    cursor: "pointer",
    color:
      state.data.value === ""
        ? "rgba(246, 184, 61, 1)"
        : "rgba(38, 38, 38, 0.6)",
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "-0.48px",
    marginBottom: "8px",
    "&:last-of-type": {
      marginBottom: 0,
    },
  }),
  menu: (base) => ({
    width: isTablet ? "143px" : "210px",
    marginTop: "4px",
    borderRadius: "15px",
    zIndex: 9999,
    backgroundColor: "#FFF",
    fontFamily: "Manrope",
    fontSize: isTablet ? "14px" : "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: isTablet ? "18px" : "20px",
    letterSpacing: "-0.48px",
    overflowY: "auto",
    padding: "14px 8px 14px 14px",
    boxSizing: "border-box",
    border: "1px solid rgba(38, 38, 38, 0.15)",
  }),
  dropdownIndicator: (styles) => ({
    padding: isTablet ? "12px" : "15px 14px",
    height: isTablet ? "42px" : "48px",
    svg: {
      width: "18px",
      height: "18px",
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "rgba(38, 38, 38, 0.50);)",
    margin: "0",
    padding: isTablet ? "12px" : "14px",
  }),
  singleValue: (styles) => ({
    ...styles,
    padding: "14px",
    margin: "0",
    color: "rgba(38, 38, 38, 1)",
  }),
  input: (base) => ({
    ...base,
    opacity: 0,
    height: "1px",
    width: "1px",
    position: "absolute",
    zIndex: -1,
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

    maxHeight: "216px",
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
});

export default customerSelectStyles;

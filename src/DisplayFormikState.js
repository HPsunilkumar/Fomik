import React from "react";
import * as PropTypes from "prop-types";
import { connect as formikConnect } from "formik";

const DisplayFormikState = ({ formik }) => (
  <div
    style={{
      overflowY: "auto",
      width: "400px",
      maxWidth: "400px",
      background: "#06dd",
      color: "#ffffff",
      border: "1px solid rgba(0, 0, 0, 0.08)"
    }}
  >
    <pre style={{ fontSize: "12px", padding: "0 1em" }}>
      <strong>form</strong> = {JSON.stringify(formik, null, 2)}
    </pre>
  </div>
);

DisplayFormikState.propTypes = {
  formik: PropTypes.object.isRequired
};

export default formikConnect(DisplayFormikState);

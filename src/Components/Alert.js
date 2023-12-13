import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "80px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{props.alert.message}</strong>
        </div>
      )}
    </div>
  );
}

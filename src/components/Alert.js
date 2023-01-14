import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.type.toUpperCase()}!</strong>&nbsp;
            {props.alert.msg}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => props.hideAlert()}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

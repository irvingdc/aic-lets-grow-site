import React from "react";
import { validateEmail } from "../../../utils/functions";
import { checkboxClass, container, error, noerror } from "./index.module.less";

let validateField = (type, value, validateNow, required) => {
  if (!validateNow) return null;
  if (type === "email") {
    return required && validateEmail(value)
      ? null
      : "Please enter a valid email.";
  } else {
    return required && !!value ? null : "Required.";
  }
};

export default ({
  label,
  onChange,
  name,
  value,
  type,
  options,
  disabled,
  required,
  validateNow,
}) => {
  let error = validateField(type, value, validateNow, required);
  return (
    <div
      className={[container, type === "checkbox" ? checkboxClass : ""].join(
        " "
      )}
    >
      {type !== "checkbox" ? <label htmlFor={name}>{label}</label> : null}
      {type === "textarea" ? (
        <textarea
          onChange={(e) => onChange(e.target.value, name)}
          name={name}
          value={value}
          disabled={disabled}
        ></textarea>
      ) : type === "select" ? (
        <select
          onChange={(e) => onChange(e.target.value, name)}
          disabled={disabled}
        >
          {options.map((it, key) => (
            <option key={key} value={it}>
              {it}
            </option>
          ))}
        </select>
      ) : type === "checkbox" ? (
        <p>
          <input
            type="checkbox"
            name={name}
            checked={value}
            onChange={(e) => onChange(e.target.checked, name)}
            disabled={disabled}
          />
          {label}
        </p>
      ) : (
        <input
          onChange={(e) => onChange(e.target.value, name)}
          name={name}
          value={value}
          type={type === "number" ? "number" : "text"}
          disabled={disabled}
        />
      )}
      {error ? (
        <p className={error}>{error}</p>
      ) : (
        <p className={noerror}>correct</p>
      )}
    </div>
  );
};

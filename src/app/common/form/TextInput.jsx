import React from "react";
import { Label, Form } from "semantic-ui-react";

const TextInput = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        selected = {{type} ==='date' && input.value ? new Date(input.value) : null}
        // onBlur={(e, val) => input.onBlur(val)}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}'
        </Label>
      )}
    </Form.Field>
  );
};

export default TextInput;

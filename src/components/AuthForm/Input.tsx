interface InputProps<F extends string> {
  type?: "password" | "email" | "text";
  value: string;
  field: F;
  placeholder?: string;
  onInputChange: (value: string, field: F) => void;
}

export function Input<F extends string>({
  value,
  onInputChange,
  field,
  type,
  placeholder,
}: InputProps<F>): JSX.Element {
  return (
    <input
      type={type ? type : "text"}
      id={field}
      value={value}
      placeholder={placeholder ? placeholder : ""}
      onChange={({ target: { value } }) => onInputChange(value, field)}
    />
  );
}

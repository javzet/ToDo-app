interface InputProps<F extends string> {
  type?: "password" | "email" | "text";
  value: string;
  field: F;
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement>;
  onInputChange: (value: string, field: F) => void;
  callback?: (value: string) => void;
}

export function Input<F extends string>({
  value,
  onInputChange,
  field,
  type,
  placeholder,
  callback,
  ref
}: InputProps<F>): JSX.Element {
  return (
    <input
      type={type || "text"}
      id={field}
      value={value}
      placeholder={placeholder || ""}
      ref={ref}
      onChange={({ target: { value } }) => {
        onInputChange(value, field);
        if (callback) {
          callback(value);
        }
      }}
    />
  );
}

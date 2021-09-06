interface ObjectKeyString<T> {
  [key: string]: T;
}
export function validateAuthFormFields<
  Fields extends ObjectKeyString<string>,
  Regex extends ObjectKeyString<RegExp>
>(fields: Fields, regex: Regex) {
  let validatedFields: { [field: string]: boolean } = {};
  for (const field in fields) {
    validatedFields = {
      ...validatedFields,
      [field]: regex[field].test(fields[field])
    };
  }
  return validatedFields;
}

export function validateMatchPasswords(
  password: string,
  confirmPassword: string
) {
  return password === confirmPassword;
}

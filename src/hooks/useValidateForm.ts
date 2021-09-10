import { useRef } from "react";

interface ErrorList {
  identifier: string;
  error: string;
}

type Regex = {
  [key: string]: RegExp;
};

type Form = {
  [field: string]: string;
};

export function useValidateForm() {
  const fieldsValidated = useRef<number>(0);
  const validateField = (data: string, regex: RegExp) => {
    return regex.test(data);
  };

  console.log(fieldsValidated.current);

  const verifyIfErrorExists = (errors: ErrorList[], key: string) => {
    const existError = errors.find((error) => error.identifier !== key);

    if (fieldsValidated.current < 1) {
      return true;
    } else if (existError) {
      console.log(existError);
      return false;
    }
  };

  const validate = <T extends Form>(
    form: T,
    regex: Regex,
    confirmation?: { field: string; value: string }
  ): ErrorList[] => {
    let _errorList: ErrorList[] = [];

    for (const key in form) {
      const error = validateField(form[key], regex[key]);
      if (!error) {
        fieldsValidated.current++;
        if (verifyIfErrorExists(_errorList, key)) {
          _errorList = [
            ..._errorList,
            {
              identifier: key,
              error: `${key} is not valid`
            }
          ];
        }
      }
    }

    console.log(_errorList);

    if (confirmation) {
      if (!(form[confirmation.field] === confirmation.value)) {
        _errorList = [
          ..._errorList,
          {
            identifier: confirmation.field,
            error: `The ${confirmation.field}s doesn't match`
          }
        ];
      }
    }
    return _errorList;
  };

  return {
    validate
  };
}

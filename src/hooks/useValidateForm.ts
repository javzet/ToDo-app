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
  const validateField = (data: string, regex: RegExp) => {
    return regex.test(data);
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
        _errorList = [
          ..._errorList,
          {
            identifier: key,
            error: `${key} is not valid`
          }
        ];
      }
    }

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

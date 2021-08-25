interface ErrorList {
  identifier: string;
  error: string;
}

type Regex<T> = {
  [P in keyof T]: RegExp;
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
    regex: Regex<T>,
    confirmation?: { field: string; value: string },
    errors?: ErrorList[]
  ): ErrorList[] => {
    let _errorList: ErrorList[] = [];

    for (const key in form) {
      if (form.hasOwnProperty(key)) {
        const error = validateField(form[key], regex[key]);
        const searchError = errors?.find(
          (error) => error.identifier === key
        )?.error;
        if (!error) {
          _errorList = [
            ..._errorList,
            {
              identifier: key,
              error: searchError ? searchError : `${key} is not valid`,
            },
          ];
        }
      }
    }

    if (confirmation) {
      if (!(form[confirmation.field] === confirmation.value)) {
        _errorList = [
          ..._errorList,
          {
            identifier: confirmation.field,
            error: `The ${confirmation.field}s doesn't match`,
          },
        ];
      }
    }
    return _errorList;
  };

  return {
    validate,
  };
}

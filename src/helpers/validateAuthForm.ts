import { ErrorForm } from "../Models/AuthError";

type ObjectRegExp = {
  [key: string]: RegExp;
};

type ObjectString = {
  [key: string]: string;
};

interface Evaluation {
  value: string;
  field: string;
}

interface DataEvaluation extends Evaluation {
  regex: RegExp;
};

export class ValidationForm<F extends ObjectString, R extends ObjectRegExp> {
  private static fieldsEvaluated: number;
  private errors: ErrorForm[];
  private form: F;
  private regex: R;

  constructor(form: F, regex: R) {
    ++ValidationForm.fieldsEvaluated;
    this.form = form;
    this.regex = regex;
    this.errors = [];
  }

  private validate(fieldsToEvaluate: DataEvaluation[]): ErrorForm[] {
    let errors: ErrorForm[] = [];

    fieldsToEvaluate.forEach(({ field, value, regex }) => {
      const isValid = regex.test(value);
      ValidationForm.fieldsEvaluated++;
      if (!isValid) {
        const error = new ErrorForm(field, `${field} is not valid`);
        errors = [...errors, error];
      }
    });

    return errors;
  }

  private validateMatch(field: DataEvaluation, matchField: Evaluation) {
    const isMatch = field.value === matchField.value;
    if (!isMatch) {
      const error = new ErrorForm(matchField.field, `The ${matchField.field}s doesn't match`);

      this.setErrors(error);
    }
  }

  public validateForm(matchField?: Evaluation) {
    const generatedArray = this.generateEvaluationArray();

    this.errors = this.validate(generatedArray);

    if (matchField) {
      const fieldToEvaluate = generatedArray.find((element) => {
        return element.field === matchField.field && element;
      });
      if (fieldToEvaluate) {
        this.validateMatch(fieldToEvaluate, matchField);
      } else {
        throw new Error(`Ningún campo del formulario coincide con el campo: ${matchField.field}`);
      }
    }

    return this;
  }

  private generateEvaluationArray(): DataEvaluation[] {
    let generated: DataEvaluation[] = [];
    for (const field in this.form) {
      generated = [
        ...generated,
        {
          field,
          value: this.form[field],
          regex: this.regex[field]
        }
      ];
    }
    return generated;
  }

  public getErrors() {
    return this.errors;
  }

  public setErrors(errors: ErrorForm[] | ErrorForm) {
    if (Array.isArray(errors)) {
      this.errors = [...this.errors, ...errors];
    } else {
      this.errors = [...this.errors, errors];
    }
  }

  public getValidations() {
    return ValidationForm.fieldsEvaluated;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberFormat'
})
export class CardNumberFormatPipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value !== 'string' || !value) {
      return value; // Return the input value if it's not a string or falsy
    }

    // Remove any existing spaces from the value
    const stringValue = value.toString().replace(/\s/g, '');

    // Use regex to add a space every 4 digits
    const formattedValue = stringValue.replace(/(\d{4})/g, '$1 ');

    return formattedValue.trim(); // Remove leading/trailing spaces
  }
}

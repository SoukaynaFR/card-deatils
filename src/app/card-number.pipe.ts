import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {
  transform(value: string): string {
    // Remove any non-digit characters from the input value
    const cleanedValue = value.replace(/\D/g, '');

    // Use regex to add spaces every 4 characters
    return cleanedValue.replace(/(.{4})/g, '$1 ');
  }
}

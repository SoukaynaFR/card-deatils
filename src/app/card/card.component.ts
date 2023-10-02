import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  cardholder: string = '';
  cardNumber: string = '';
  MM: string = '';
  YY: string = '';
  cvc: string = '';

  showCardholderError: boolean = false;
  showCardNumberError: boolean = false;
  showMMError: boolean = false;
  showCvcError: boolean = false;

  showCardNumberInvalidFormatError: boolean = false;
  showMMInvalidFormatError: boolean = false;
  showCvcInvalidFormatError: boolean = false;

  cantBeBlank = "Can't be blank";

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit() {
    // Reset error flags
    this.showCardholderError = false;
    this.showCardNumberError = false;
    this.showMMError = false;
    this.showMMError = false;

    this.showCvcError = false;
    this.showCardNumberInvalidFormatError = false;
    this.showMMInvalidFormatError = false;
    this.showCvcInvalidFormatError = false;

    // Check for empty fields
    if (!this.cardholder) {
      this.showCardholderError = true;
    }
    if (!this.cardNumber) {
      this.showCardNumberError = true;
    }
    if (!this.MM) {
      this.showMMError = true;
    }
    if (!this.cvc) {
      this.showCvcError = true;
    }

    // Check for invalid formats
    if (!isValidCardNumber(this.cardNumber)) {
      this.showCardNumberInvalidFormatError = true;
    }
    if (!isValidExpiryDate(this.MM, this.YY)) {
      this.showMMInvalidFormatError = true;
    }
    if (!isValidCvc(this.cvc)) {
      this.showCvcInvalidFormatError = true;
    }

    // If any error is shown, return
    if (
      this.showCardholderError ||
      this.showCardNumberError ||
      this.showMMError ||
      this.showCvcError ||
      this.showCardNumberInvalidFormatError ||
      this.showMMInvalidFormatError ||
      this.showCvcInvalidFormatError
    ) {
      return;
    }

    // If all checks pass, navigate to the "completed" page
    this.router.navigate([
      '/completed',
      {
        cardholder: this.cardholder,
        cardNumber: this.cardNumber,
        MM: this.MM,
        YY: this.YY,
        cvc: this.cvc,
      },
    ]);

    console.log('Navigate to completed');
  }
}
function isValidCardNumber(cardNumber: string): boolean {
  // Card number should contain only digits
  return /^\d+$/.test(cardNumber);
}

function isValidExpiryDate(MM: string, YY: string): boolean {
  // MM and YY should contain only digits and be in the format MM/YY
  return /^\d{2}\/\d{2}$/.test(`${MM}/${YY}`);
}

function isValidCvc(cvc: string): boolean {
  // CVC should contain only digits and be exactly 3 digits long
  return /^\d{3}$/.test(cvc);
}

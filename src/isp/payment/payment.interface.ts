export interface Payment {
    pay(amount: number): void;
}

export interface CreditCardPayment extends Payment {
    validateCard(cardNumber: string): boolean;
}


export interface PayPalPayment extends Payment {
    login(email: string, password: string): void;
}

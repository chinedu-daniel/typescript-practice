function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

const total = calculateTotal(25000, 3);

console.log(total);
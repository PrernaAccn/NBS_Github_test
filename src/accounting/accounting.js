class Accounting {
    constructor() {
        this.balance = 1000.00;
    }

    getBalance() {
        return this.balance;
    }

    credit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    debit(amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

module.exports = Accounting;
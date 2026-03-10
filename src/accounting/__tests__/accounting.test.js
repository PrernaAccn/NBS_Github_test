const Accounting = require('../accounting');

describe('Accounting App Unit Tests', () => {
    let acc;

    beforeEach(() => {
        acc = new Accounting();
    });

    test('TC001: View initial balance', () => {
        expect(acc.getBalance()).toBe(1000.00);
    });

    test('TC002: Credit account with positive amount', () => {
        const result = acc.credit(500.00);
        expect(result).toBe(true);
        expect(acc.getBalance()).toBe(1500.00);
    });

    test('TC003: Debit account with sufficient funds', () => {
        acc.credit(500.00); // balance 1500
        const result = acc.debit(200.00);
        expect(result).toBe(true);
        expect(acc.getBalance()).toBe(1300.00);
    });

    test('TC004: Debit account with insufficient funds', () => {
        const result = acc.debit(1500.00);
        expect(result).toBe(false);
        expect(acc.getBalance()).toBe(1000.00);
    });

    test('TC005: Multiple credit operations', () => {
        acc.credit(500.00);
        acc.credit(500.00);
        expect(acc.getBalance()).toBe(2000.00);
    });

    test('TC006: Multiple debit operations with sufficient funds', () => {
        acc.credit(1000.00); // balance 2000
        acc.debit(300.00);
        acc.debit(200.00);
        expect(acc.getBalance()).toBe(1500.00);
    });

    test('TC007: Credit zero amount', () => {
        const result = acc.credit(0.00);
        expect(result).toBe(false);
        expect(acc.getBalance()).toBe(1000.00);
    });

    test('TC008: Debit zero amount', () => {
        const result = acc.debit(0.00);
        expect(result).toBe(false);
        expect(acc.getBalance()).toBe(1000.00);
    });

    test('TC009: Credit large amount', () => {
        const result = acc.credit(999999.99);
        expect(result).toBe(true);
        expect(acc.getBalance()).toBe(1000999.99);
    });

    test('TC010: Debit entire balance', () => {
        const result = acc.debit(1000.00);
        expect(result).toBe(true);
        expect(acc.getBalance()).toBe(0.00);
    });

    test('Credit negative amount', () => {
        const result = acc.credit(-100.00);
        expect(result).toBe(false);
        expect(acc.getBalance()).toBe(1000.00);
    });

    test('Debit negative amount', () => {
        const result = acc.debit(-100.00);
        expect(result).toBe(false);
        expect(acc.getBalance()).toBe(1000.00);
    });
});
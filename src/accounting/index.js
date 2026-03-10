const readline = require('readline');
const Accounting = require('./accounting');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const acc = new Accounting();

function displayMenu() {
    console.log("--------------------------------");
    console.log("Account Management System");
    console.log("1. View Balance");
    console.log("2. Credit Account");
    console.log("3. Debit Account");
    console.log("4. Exit");
    console.log("--------------------------------");
}

function viewBalance() {
    console.log("Current balance: " + acc.getBalance().toFixed(2));
}

function creditAccount() {
    rl.question("Enter credit amount: ", (amount) => {
        amount = parseFloat(amount);
        if (acc.credit(amount)) {
            console.log("Amount credited. New balance: " + acc.getBalance().toFixed(2));
        } else {
            console.log("Invalid amount");
        }
        main();
    });
}

function debitAccount() {
    rl.question("Enter debit amount: ", (amount) => {
        amount = parseFloat(amount);
        if (acc.debit(amount)) {
            console.log("Amount debited. New balance: " + acc.getBalance().toFixed(2));
        } else {
            console.log("Insufficient funds for this debit.");
        }
        main();
    });
}

function main() {
    displayMenu();
    rl.question("Enter your choice (1-4): ", (choice) => {
        choice = parseInt(choice);
        switch(choice) {
            case 1:
                viewBalance();
                main();
                break;
            case 2:
                creditAccount();
                break;
            case 3:
                debitAccount();
                break;
            case 4:
                console.log("Exiting the program. Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice, please select 1-4.");
                main();
        }
    });
}

main();
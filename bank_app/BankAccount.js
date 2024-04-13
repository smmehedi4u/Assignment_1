class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`\nDeposited $${amount}.After new balance is $${this.balance}.`);
        } else {
            console.log("Please enter a positive amount to deposit.");
        }
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. Remaining balance is $${this.balance}.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`\nAccount Number: ${this.accountNumber}\nOwner Name: ${this.ownerName}\nBalance: $${this.balance}`);
    }
}

// Create two instances of the BankAccount class
let account1 = new BankAccount(1001, "John Doe", 600);
let account2 = new BankAccount(1002, "Mehedi Hasan", 800);

// Demonstrate functionality
console.log("Initial account information:");
account1.displayAccountInfo();
account2.displayAccountInfo();

console.log("\nTransactions:");
account1.deposit(200);
account1.withdraw(100);
account2.deposit(300);
account2.withdraw(900);

console.log("\nUpdated account information:");
account1.displayAccountInfo();
account2.displayAccountInfo();

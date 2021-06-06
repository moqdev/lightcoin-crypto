let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}

class Deposit {

  // Pass in the account that the deposit this for
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  // Update the balance in the account
  commit() {
    this.account.balance += this.amount;
  }

}

class Withdrawal {

  constructor(amount) {
    this.amount = amount;
  }

  commit() {
    balance -= this.amount;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t3 = new Deposit(120.00);
t3.commit();
console.log('Transaction 3:', t3);

t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);

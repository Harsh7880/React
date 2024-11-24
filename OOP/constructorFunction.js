 class BankAccount {
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;

        this.deposit = (amount) => {
            this.balance += amount;
        };
        this.withdraw = (amount) => {
            this.balance -= amount;
        };
    }
}

 const rakeshAccount = new BankAccount("Rakesh",1000);
 rakeshAccount.withdraw(500);
 console.log(rakeshAccount);

 const harshAccount = new BankAccount("Harsh",3000);
 harshAccount.deposit(4000);
 console.log(harshAccount);



// Dom Manipulation

// create dummy Application of BankApp
// take userName,initial balance as input
// store accounts in a array localy
// provide deposte and withdraw functionlaity
const acconts =[];

const accountFrom = document.querySelector('#accoutFrom');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

accountFrom.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account  = new BankAccount(customerName.value,+balance.value);
    acconts.push(account);
    console.log(acconts);
})

const depositFrom = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

depositFrom.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account = acconts.find(
    (account)=> 
    account.accountNumber === +accountNumber.value
    );
    account.deposit(+amount.value)
    console.log(acconts);
})
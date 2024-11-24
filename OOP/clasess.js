class BankAccoumnt{
     #customerName;
     accountNumber = Date.now();
     balance = 0;

     constructor(customerName,balance=0){
      this.customerName = customerName;
      this.balance = balance;
      this.accountNumber = Date.now();
     }

     deposit(amount){
       this.balance += amount;
     }
     withDraw(amount){
        this.balance -= amount;
     }

}

const harshAccount = new BankAccoumnt('Harsh',2000);
const AkshatAccount = new BankAccoumnt('Akshat',3000);
AkshatAccount.deposit(50000);

AkshatAccount.withDraw(50000);
console.log(AkshatAccount);

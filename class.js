class bankAccount  {
    constructor(name, balance, typeOfAccount) {
        this.balance = balance;
        this.name = name;
        this.typeOfAccount = typeOfAccount; 
    }
    withdraw(){
    }
}
const abiola = new bankAccount("Olaide", 10000, "studentAccount");
const dayo = new bankAccount("adedayo", 400, "workingClass");


console.log(abiola.name);
console.log(dayo.name);
console.log(dayo.name);
// Nr.1
import { capitalize, reverseString } from './stringUtils';

// Nr.2
import { LoanCalculator, TaxCalculator } from './finance';

// Nr.3
import { UserManagement } from './userManagement';

// Nr.4
import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils';


// Nr.1
console.log(capitalize('daniela')); 
console.log(reverseString('homework')); 

// Nr.2
const monthly = LoanCalculator.calculateMonthlyPayment(500000, 7, 15);
console.log(monthly);

const tax = TaxCalculator.calculateIncomeTax(120000, 15);
console.log(tax);

// Nr.3
const admin = new UserManagement.Admin.AdminUser('Daniela', 'daniela@gmail.com');

console.log(admin.isSuperAdmin); 

admin.allowSuperAdmin();
console.log(admin.isSuperAdmin); 

admin.forbidSuperAdmin();
console.log(admin.isSuperAdmin); 

// Nr. 4
console.log(generateFibonacci(15));
console.log(generatePrimeNumbers(15));
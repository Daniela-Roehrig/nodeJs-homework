//---------------Nr 1.------------------

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Daniela",
  permissions: ["read", "write"],
  email: "daniela@example.com"
};

//---------------Nr 2.------------------

type Car = {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number;
};

const car: Car = {
  make: "Toyota",
  model: "Corolla",
  engine: {
    type: "Hybrid",
    horsepower: 121
  },
  year: 2022
};

const printCarInfo = (car: Car): void => {
  console.log(`Make: ${car.make}`);
  console.log(`Model: ${car.model}`);
  console.log(`Engine: ${car.engine.type}, ${car.engine.horsepower} HP`);
  if (car.year) {
    console.log(`Year: ${car.year}`);
  }
};


//---------------Nr 3.------------------

interface IProduct {
  name: string;
  price: number;
}

const calculateDiscount = (product: IProduct, discount: number): number => {
  return product.price - (product.price * discount) / 100;
}

const item: IProduct = { name: "Notebook", price: 1000 };
const discountedPrice = calculateDiscount(item, 10); 


//---------------Nr 4.------------------

interface IEmployee {
  name: string;
  salary: number;
}

const employees: IEmployee[] = [
  { name: "Alexander", salary: 3000 },
  { name: "Alissa", salary: 4000 },
  { name: "Andrej", salary: 5000 }
];

const getSalaries = (employeeList: IEmployee[]): number[] => {
  return employeeList.map(employee => employee.salary);
}


//---------------Nr 5.------------------

interface IPerson {
  firstName: string;
  lastName: string;
}

interface Student extends IPerson {
  grade: number;
}

const student: Student = {
  firstName: "Swetlana",
  lastName: "Berg",
  grade: 5
};

const printStudentInfo = (student: Student): void => {
  console.log(`Student: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}

//---------------Nr 6.------------------

interface IConcatStrings {
  (string1: string, string2: string): string;
}

const concatStrings: IConcatStrings = (string1, string2) => string1 + string2;


const result = concatStrings("Hello, ", "TypeScript!"); 




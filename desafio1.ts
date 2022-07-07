// Como podemos rodar isso em um arquivo .ts sem causar erros?

interface Employee {
  name: string;
  code: number;
}

let employee = {} as Employee;
employee.code = 10;
employee.name = "John";

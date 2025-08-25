// 使用 TypeScript 定义接口
interface User {
  firstName: string;
  lastName: string;
}

function greet(user: User) { // 指定参数类型
  return `Hello, ${user.firstName} ${user.lastName}`;
}

const user = new User( firstName: 'Alice', lastName: 25 );
greet(user); // ❌ 编辑器立刻用红色波浪线报错！
// 错误信息：[ts] Argument of type '{ name: string; age: number; }'
// is not assignable to parameter of type 'User'.
// Property 'firstName' is missing in type '{ name: string; age: number; }'.
// 这是一个 JavaScript 函数
function greet(user) {
  return `Hello, ${user.firstName} ${user.lastName}`;
}

// 调用时不小心传错了对象结构
const user = { name: "Alice", age: 25 };
greet(user); // 🚨 运行时错误：Cannot read property 'firstName' of undefined
// 只有打开浏览器才会看到这个错误！

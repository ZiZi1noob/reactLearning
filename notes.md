# React & Web Development Concepts

## 1. Expo vs. Next.js
- **Expo**: 是一个用于构建原生移动应用 (iOS, Android) 的框架和平台，它基于 React Native。
- **Next.js**: 是一个用于构建网站和Web应用 的 React 框架，专注于服务端渲染和静态生成。

## 2. JSX (JavaScript XML) vs. TSX (TypeScript XML)
- **JSX**: 允许你在 JavaScript 代码中编写类似 HTML 的标签，用于描述 UI 的结构。
- **TSX**: 为 JavaScript 添加了静态类型系统，在代码运行前进行类型检查。

## 3. state vs. props
- **state**: 组件内部的状态数据，可变化
- **props**: 从父组件传递来的属性数据，只读

## 4. useState vs. useReducer
- **useState**: 用于管理简单的状态
- **useReducer**: 用于管理复杂的状态逻辑

## 5. useContext
- 用于在组件树中共享状态，避免props层层传递

## 6. useMemo
- 用于缓存计算结果，避免不必要的重复计算

## 7. useCallback
- 用于缓存函数，避免不必要的函数重新创建

## 8. export vs. export default
- **export default**: 用于一个文件只导出一个主要值（如页面组件），导入时可任意命名且不用花括号。
- **export**: 用于一个文件导出多个值（如工具函数、组件），导入时必须用花括号按准确名称或别名来引入。

## 9. 自闭合标签

| 标签 | 示例 | 描述 |
|------|------|------|
| `<img>` | `<img src=".jpg" alt="图片">` | 图像 |
| `<input>` | `<input type="text">` | 输入框 |
| `<br>` | `<br>` 或 `<br />` | 换行 |
| `<hr>` | `<hr>` 或 `<hr />` | 水平线 |
| `<meta>` | `<meta charset="UTF-8">` | 元数据 |
| `<link>` | `<link rel="stylesheet" href="style.css">` | 外部资源链接 |
| `<source>` | `<source src="video.mp4" type="video/mp4">` | 媒体源 |

## 10. HTML 列表标签
- **ul**: unordered list（无序列表）
- **ol**: ordered list（有序列表）  
- **li**: list item（列表项）
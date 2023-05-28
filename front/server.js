const express = require('express');
const app = express();
const path = require('path');

// 静态文件服务
app.use(express.static(path.join(__dirname, '')));

// 定义根路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 定义其他路由或处理逻辑

// 启动服务器
const port = 5173;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

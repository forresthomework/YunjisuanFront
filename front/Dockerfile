# 使用基础的 Node.js 镜像作为基础
FROM node:18

# 设置工作目录
WORKDIR /usr/src/app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装依赖
RUN  npm  install

# 复制项目文件到工作目录
COPY . .

# 暴露容器的端口（根据你的项目配置）
EXPOSE 5173

# 运行前端应用
CMD ["node", "server.js"]

## 本地调试

### 安装依赖

```bash
npm install
```

### 运行服务

```bash
node server.js
```

## docker镜像

### 建立镜像

```bash
 docker build -t {用户名}/{仓库名}:{标签}  .
```

### 运行容器

```bash
docker run -d --name {容器名} -p 5173:5173 {用户名}/{仓库名}:{标签}
```


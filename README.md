# 图景诗意 - AI照片诗词生成器

这是一个现代风格的网页应用，用户可以上传自然风景照片，应用会通过AI分析照片内容，自动生成与之相符的中国古典诗句。

## 功能特点

- 现代科技感UI设计，暗色主题
- 流畅的动画和交互效果
- 支持上传JPG、PNG格式的图片
- 支持拖拽上传
- 模拟AI图像分析过程
- 生成3句与图片内容相符的古诗句
- 点击诗句可查看完整诗词及作者信息
- 响应式设计，适配不同设备

## 技术实现

- 纯前端实现，使用HTML、CSS和JavaScript
- 使用现代CSS特性（渐变、模糊、动画等）
- 使用Font Awesome图标库
- 使用FileReader API读取本地图片
- 模拟图像分析过程（实际项目中可对接图像识别API）
- 内置丰富的古诗数据库，包含山水、云霞、日落、森林、雪景等多种场景的诗句

## 使用方法

1. 打开index.html文件
2. 点击上传区域或"选择照片"按钮
3. 选择一张自然风景照片
4. 等待"AI分析"完成
5. 查看生成的诗句
6. 点击任意诗句可查看完整诗词信息

## 部署指南

### 方法一：静态网站托管（推荐）

本项目是纯前端应用，可以部署在任何静态网站托管服务上：

1. **准备工作**
   - 确保您拥有一个域名
   - 选择一个静态网站托管服务（如Nginx、Apache、Vercel、Netlify等）

2. **使用传统Web服务器（Nginx/Apache）部署**
   - 将所有项目文件上传到您的服务器
   - 配置Nginx或Apache指向项目目录
   - 配置您的域名DNS指向服务器IP

   **Nginx配置示例**：
   ```nginx
   server {
       listen 80;
       server_name 您的域名.com;
       root /path/to/project;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **使用云服务部署**
   - **阿里云/腾讯云/华为云**：
     - 开通对象存储服务（OSS/COS）
     - 上传所有项目文件
     - 开启静态网站托管功能
     - 绑定您的自定义域名

   - **Vercel/Netlify部署**：
     - 创建GitHub/GitLab仓库并上传项目
     - 在Vercel/Netlify中导入该仓库
     - 配置构建选项（本项目不需要构建）
     - 绑定您的自定义域名

### 方法二：使用Docker容器部署

1. 创建Dockerfile：
   ```dockerfile
   FROM nginx:alpine
   COPY . /usr/share/nginx/html
   EXPOSE 80
   ```

2. 构建并运行Docker镜像：
   ```bash
   docker build -t image-to-poem .
   docker run -d -p 80:80 image-to-poem
   ```

3. 配置域名指向您的服务器IP

### 方法三：使用GitHub Pages部署

1. 创建GitHub仓库并上传项目
2. 开启GitHub Pages功能
3. 配置自定义域名（可选）

## 注意事项

- 本应用为前端演示项目，图像分析功能为模拟实现
- 实际项目中可对接专业的图像识别API，如百度AI、腾讯云图像识别等
- 诗句数据库可进一步扩充，增加更多场景和更丰富的诗句

## 未来计划

- 接入真实的图像识别API
- 扩充诗句数据库
- 增加更多交互效果
- 支持生成更多样式的诗句展示
- 增加分享功能
- 添加暗色/亮色主题切换

## 作者

图景诗意团队

## 许可证

MIT 
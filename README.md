# myblog
基于node.js的微博博客应用


该例子是参照https://github.com/nswbmw/N-blog/blob/master/book/4.13%20%E6%97%A5%E5%BF%97.md
进行编写的，代码都来自上述地址
主要实现的功能：用户注册、登录、退出、个人主页、发表文章、文章详情页、留言、删除留言

运行程序之前：
npm install 安装所需要的包

运行mongodb数据库：
启动mongodb
PS F:\mongodb\bin> ./mongod.exe --dbpath "F:\mongodb\data\db"
打开浏览器：http://localhost:27017/
It looks like you are trying to access MongoDB over HTTP on the native driver port.

运行本程序：
PS F:\myblog> node index.js
打开浏览器：http://localhost:3000/posts 查看效果

运行 supervisor index 启动博客，访问以下地址查看效果：

http://localhost:3000/posts
http://localhost:3000/signout
http://localhost:3000/signup



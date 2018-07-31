# 7月31日-8月5日工作总结

- 7.31 路由权限控制

  - 初始只给任务大厅的路由
  - 登录后，根据用户类型配置路由项
  - 普通用户有：我的主页（默认）、我的订单、账户设置，以及错误页
  - 设计师有：我的主页、我的订单、我的案例、我的公司、账户设置，以及错误页
  - 配置：[初始配置](./src/routers/basicRouters.js)、[用户](./src/routers/userRouters.js)、[设计师](./src/routers/designerRouters.js)

- 7.31 登录注册组件提至[跟实例](./src/App.vue)，便于user数据的维护和使用

# 7月24日-29日工作总结

- 解决前端开发过程中，没有后端数据的问题；

  - 解决方案：[使用mockjs拦截ajax请求并模拟相应数据](https://github.com/xixililian/mall-pc/blob/master/src/mock.js)
  - 模拟数据会在开发过程中根据我们的业务更新，包括接口名字和数据字段等，同时更新接口文档
  - 需要后端开发过程中随时关注[接口文档](https://github.com/xixililian/mall-pc/blob/master/api_needs.md)的更新，并按文档约定开发
  - 新增ajax依赖库axios

- 更新[接口文档](https://github.com/xixililian/mall-pc/blob/master/api_needs.md)：

  - 添加了各个接口的名称，前端的模拟请求使用了这些名称。路径待定。
  - 删除了两个讨论之后废弃/合并的接口
  - 修改了部分接口

- 搭建[手机端](https://github.com/xixililian/mall-mob/)的基本结构、依赖和构建工具；
- 补充[pc端](https://github.com/xixililian/mall-pc/)个人中心的路由配置；
- 完善了pc端的登录，以及简单的路由权限控制；
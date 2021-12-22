# Todos on CloudBase

## 准备

1. 准备环境，确保计费模式为**按量计费**

1. 配置环境变量

   运行如下命令创建 `app/.env.local`：

   ```shell
   cp -n .env.example app/.env.local
   ln -sf app/.env.local .
   ```

## 部署

```shell
yarn && yarn deploy
```

## 项目笔记

1. 如何给第三方包打补丁？

   `react-scripts 5` 使用 `webpack 5` 来打包，而 `@cloudbase/js-sdk 1.7.1` 还没有做好适配，导致无法编译。

   此时，可以使用 [patch-package] 来手动打补丁。

1. 如何做数据校验？

   数据校验，我们用 [JSON Schema][json-schema] 来规范数据，具体就是用 [ajv] 来验证数据。

   [JSON Schema][json-schema] 由 [typescript-json-schema] 自动生成。

## 许可证

[MIT License](LICENSE.txt)

<!-- Reference -->

[ajv]: https://ajv.js.org/
[json-schema]: https://ajv.js.org/json-schema.html
[typescript-json-schema]: https://www.npmjs.com/package/typescript-json-schema
[patch-package]: https://www.npmjs.com/package/patch-package

<!-- End -->

<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://main.qcloudimg.com/raw/dbc204f8fc25387645aea9282c6d1b99.png"></a>

# React 自定义应用示例

这个目录是基于云开发的一个 [React](https://reactjs.bootcss.com/) 应用示例，包含 React + 云函数 + 静态网站部署，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

此项目基于 React + TypeScript 开发，并采用了 [react-app-rewired](https://github.com/timarney/react-app-rewired) 修改 CRA（create-react-app） 配置，提供了修改 CRA（create-react-app）构建配置的能力。

## 线上演示地址

[https://framework-1258016615.tcloudbaseapp.com/music/](https://framework-1258016615.tcloudbaseapp.com/music/)

点击下方按钮使用 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 可以在云端一键部署本项目到自己的云开发账号上。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&tdl_anchor=github&tdl_site=0&appUrl=https%3A%2F%2Fgithub.com%2FTencentCloudBase%2Fcloudbase-templates&workDir=music&appName=music)

## 部署一个 React 应用

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 CloudBase CLI 命令工具](https://github.com/TencentCloudBase/cloudbase-framework/blob/master/CLI_GUIDE.md)

### 步骤二. 初始化应用示例

在命令行执行

```
cloudbase init --template react-starter
```

### 步骤三. 修改配置

将您的环境 ID 填写到 `src/tcb.ts` 文件的中

### 步骤四. 一键部署

进入到项目目录，在命令行执行

```
cloudbase framework deploy
```

## 开发命令及配置

### 本地开发

```
npm run start
```

### 上线部署

```
npm run deploy
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### React 开发文档

查看 [开发者文档](https://reactjs.bootcss.com/docs/getting-started.html).

# 欢迎访问 gitbook-plugin-punctuation-converter 官网 👋

[![npm:version](https://img.shields.io/npm/v/gitbook-plugin-punctuation-converter.svg)](https://www.npmjs.com/package/gitbook-plugin-punctuation-converter)
[![npm:download](https://img.shields.io/npm/dt/gitbook-plugin-punctuation-converter.svg)](https://www.npmjs.com/package/gitbook-plugin-punctuation-converter)
[![npm:prerequisite](https://img.shields.io/badge/gitbook-*-blue.svg)](https://www.npmjs.com/package/gitbook-plugin-punctuation-converter)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/gitbook-plugin-punctuation-converter.svg)](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![website:snodreams1006.tech](https://img.shields.io/badge/website-snowdreams1006.tech-brightgreen.svg)](https://snowdreams1006.tech/)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> 基于正则表达式实现全局英文标点符号转换成中文标点符号的 Gitbook 插件

### 🏠 [主页](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter#readme)

- Github : [https://snowdreams1006.github.io/gitbook-plugin-punctuation-converter/](https://snowdreams1006.github.io/gitbook-plugin-punctuation-converter/)
- GitLab: [https://snowdreams1006.gitlab.io/gitbook-plugin-punctuation-converter/](https://snowdreams1006.gitlab.io/gitbook-plugin-punctuation-converter/)
- Gitee : [https://snowdreams1006.gitee.io/gitbook-plugin-punctuation-converter/](https://snowdreams1006.gitee.io/gitbook-plugin-punctuation-converter/)

## 屏幕截图

![punctuation-converter-use-preview.png](./punctuation-converter-use-preview.png)

## 用法

### 步骤＃1 - 更新 `book.json` 文件

在您的 `gitbook` 的 `book.json` 文件中,将 `punctuation-converter` 添加到 `plugins` 列表中.

这是最简单的示例: 

```json
{
    "plugins": ["punctuation-converter"]
}
```

### 步骤＃2 - 运行 `gitbook` 命令

1. 运行 `gitbook install` .它将自动为您的 `gitbook` 安装 `punctuation-converter` 插件.

> 该步骤仅需要允许一次即可.

```bash
gitbook install
```

或者您可以运行 `npm install gitbook-plugin-punctuation-converter` 命令本地安装 `gitbook-plugin-punctuation-converter` 插件.

```bash
npm install gitbook-plugin-punctuation-converter
```

2. 像往常一样构建您的书（ `gitbook build` ）或服务（ `gitbook serve` ）.

```bash
gitbook serve
```

## 示例

- 官方文档配置文件

> [https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter/blob/master/docs/book.json](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter/blob/master/docs/book.json)

```json
{
    "plugins": ["punctuation-converter"]
}
```

- 官方示例配置文件

> [https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter/blob/master/example/book.json](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter/blob/master/example/book.json)

```json
{
    "plugins": ["punctuation-converter"]
}
```

- 示例`book.json`文件

```json
{
    "plugins": ["punctuation-converter"]
}
```

**注意** ：如果您的书还没有创建,以上代码段可以用作完整的 `book.json` 文件.

## 作者

👤 **snowdreams1006**

- 网站 : [snowdreams1006.tech](https://snowdreams1006.tech/)
- GitHub :  [@snowdreams1006](https://github.com/snowdreams1006)
- 电子邮件 : [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## 贡献

欢迎贡献，问题和功能要求！随时检查[问题页面](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter/issues) 。

## 支持

如果这个项目对您有帮助，请给个[星星](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter) ！

## 版权

版权所有©2019 [snowdreams1006](https://github.com/snowdreams1006) 。

该项目是[MIT](https://github.com/snowdreams1006/gitbook-plugin-punctuation-converter/blob/master/LICENSE)许可的。
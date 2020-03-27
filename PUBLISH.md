# 部署指南

## 多仓库主动推送

### 设置前

> `git remote -v`

```bash
$ git remote -v
origin  git@github.com:snowdreams1006/gitbook-plugin-punctuation-converter.git (fetch)
origin  git@github.com:snowdreams1006/gitbook-plugin-punctuation-converter.git (push)
```

> `cat .git/config`

```bash
$ cat .git/config 
[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
    ignorecase = true
    precomposeunicode = true
[remote "origin"]
    url = git@github.com:snowdreams1006/gitbook-plugin-punctuation-converter.git
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
    remote = origin
    merge = refs/heads/master
```

### 设置中

> `git remote set-url --add [--push] <name> <newurl>`

git remote add giteeorigin git@gitee.com:taadis/GlobalScanner.Sdk.git

```bash
$ git remote set-url --add origin git@gitee.com:snowdreams1006/gitbook-plugin-punctuation-converter.git
```

### 设置后

```bash
$ git remote -v
origin  git@github.com:snowdreams1006/gitbook-plugin-punctuation-converter.git (fetch)
origin  git@github.com:snowdreams1006/gitbook-plugin-punctuation-converter.git (push)
origin  git@gitee.com:snowdreams1006/gitbook-plugin-punctuation-converter.git (push)
```

```bash
$ cat .git/config
[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
    ignorecase = true
    precomposeunicode = true
[remote "origin"]
    url = git@github.com:snowdreams1006/gitbook-plugin-punctuation-converter.git
    fetch = +refs/heads/*:refs/remotes/origin/*
    url = git@gitee.com:snowdreams1006/gitbook-plugin-punctuation-converter.git
[branch "master"]
    remote = origin
    merge = refs/heads/master
```

## 实际使用效果


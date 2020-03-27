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

> `git push`

```bash
$ git push
To github.com:snowdreams1006/gitbook-plugin-punctuation-converter.git
   c574443..cd7124a  master -> master
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 4 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 1.30 KiB | 1.30 MiB/s, done.
Total 10 (delta 7), reused 0 (delta 0)
remote: Powered by GITEE.COM [GNK-3.8]
To gitee.com:snowdreams1006/gitbook-plugin-punctuation-converter.git
   38c3ad2..cd7124a  master -> master
```
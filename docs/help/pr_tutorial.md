# 从零开始使用 git 命令完成一次完整的 PR

## 安装 git

打开 `PowerShell`，尝试以下命令：
```sh
git --help
```
如果已经安装，则会正确显示版本号，否则需要访问 https://git-scm.com/ 进行下载安装。

## Fork

参考 https://oop.jihuayu.site/help/fork.html

## 克隆

在 `PowerShell` 中键入以下命令：
```sh
# 其中 `username` 为你的用户名，比如我的是 `zhmushan`
git clone https://github.com/username/FZU-OOP-2020

cd FZU-OOP-2020
```

## 创建分支

直接更改主分支是一个不明智的选择，我们需要创建一个自己的工作分支，确保更改不会造成污染。

```sh
# 通俗的说，checkout 表示选择分支，-b 表示新建，更多内容执行 git checkout --help 查看
git checkout -b my_branch
```

## 修改内容

打开你喜欢的文本编辑器，找到想要修改的地方进行修改，保存。
例如，给 `FZU-OOP-2020/README.md` 文末添加一个空格。
完成修改后执行以下命令：
```sh
# 将修改的文件加入暂存区
git add README.md
# 记录更改，其中 `message` 为这次记录的信息
git commit -m "message"
```

## 提交

```sh
git push origin master
```

## PR

参考 [怎么发送PR](https://oop.jihuayu.site/help/pr.html#%E6%80%8E%E4%B9%88%E5%8F%91%E9%80%81pr)

## 同步

`PR` 被合并后，自己 fork 的仓库就滞后了，我们当然可以删掉重新 fork，但如果每次都这么做会很麻烦。
```sh
# 切换回主分支
git checkout master

# 跟踪上游仓库，并把它叫做 `upstream`
git remote add upstream https://github.com/jihuayu/FZU-OOP-2020.git

# 从上游仓库下载代码
git fetch upstream

# 从上游仓库的主分支合并代码
git rebase upstream/master

# 将更改提交到自己 fork 的仓库
git push origin master
```
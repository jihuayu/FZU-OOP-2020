# pull请求

pull请求俗称PR，是用来合并分支的一个操作。

## PR有啥用

把你的代码的更改从一个分支同步到另一个分支，注意这个分支可以是不同仓库的分支，也可以是同一个仓库的不同分支。

## 怎么发送PR

1. 在提交之前，我们需要对自己的分支有所更改。进入 Github Desktop，做出一些修改，以一个有意义的理由提交一次。

![5.png](https://i.loli.net/2020/01/24/6cVUXpjkC8AeMbY.png)

2. 将本地的提交同步到远程服务器。

![6.png](https://i.loli.net/2020/01/24/sv2o7Dd8gfKrc6e.png)

3. 进入自己 fork 的仓库主页，点击创建 pr。

![3.png](https://i.loli.net/2020/01/24/f34xqQStEsGnWAj.png)

4. 点击创建 pr，Github 会自动帮你完成文件比对过程，后续只需要等待仓库主同意合并请求即可。

![7.png](https://i.loli.net/2020/01/24/RDPkpWU47MzvbK8.png)

## PR的种类

- rebase：推荐
- merge：不推荐

## 注意

在分支没有merge之前，你的修改会同步，你不需要提交第二次PR请求。
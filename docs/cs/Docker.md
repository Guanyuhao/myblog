# Docker

> [Docker —— 从入门到实践](https://yeasy.gitbooks.io/docker_practice/image/build.html)

# Docker 基本操作

开发常用：

| images  |           查看镜像列表           |
| :-----: | :------------------------------: |
|   rmi   |             删除镜像             |
|  save   |  将指定镜像保存成 tar 归档文件   |
|  load   |    从存档或者 STDIN 加载镜像     |
|  build  |    从一个 DockerFile 构建镜像    |
| commit  |        从容器创建一个镜像        |
| create  |           创建一个容器           |
|   run   |  创建一个新的容器并运行一个命令  |
| rename  |            重命名容器            |
|  start  |             启动容器             |
|  stop   |             停止容器             |
| restart |             重启容器             |
|   rm    |             删除容器             |
|  logs   |        获取一个容器的日志        |
|  exec   |    在正在运行的容器中运行命令    |
|   cp    | 从容器和主机文件系统之间拷贝文件 |
|   ps    |           查看容器列表           |

```sh
# eg
docker pull nginx
docker run -itd -p 5210:80 -v D:\docker_web:/home/work --name llpweb nginx
docker exec -it llpweb /bin/bash
```

打开宿主机端口 5210

# Docker 容器网络

## 默认网络

> 安装 Docker 时，它会自动创建 3 个网络。可以使用 docker network ls 命令列出这些网络

```sh
docker network ls
```

|  NETWORK ID  |  NAME  | DRIVER |
| :----------: | :----: | ------ |
| 7fca4eb8c647 | bridge | bridge |
| 9f904ee27bf5 |  none  | null   |
| cf03ee007fb4 |  host  | host   |

- bridge 网络表示所有 Docker 安装中都存在的 docker0 网络。除非使用 `docker run --net=<NETWORK>`选项另行指定，否则 Docker 守护进程默认情况下会将容器连接到此网络。在主机上使用 ifconfig 命令，可以看到此网桥是主机的网络堆栈的一部分。
- none 网络在一个特定于容器的网络堆栈上添加了一个容器。该容器缺少网络接口。
- host 网络在主机网络堆栈上添加一个容器。您可以发现，容器中的网络配置与主机相同

### 操作

```sh
# 创建网路

docker network create -d bridge test-net

# 连接一个容器到一个网络

docker network connetc test-net container1
# docker run -itd --network=test-net images1

# 使用–link选项来指定一个首选别名来连接到另一个容

docker network connect --link container1:c1 multi-host-network container2

# 验证这个容器是否已连接到网络

docker network inspect test-net

#从网络删除容器
docker network disconnect
```

# Links

## Docker

- [install docker](https://docs.docker.com/get-docker/)
- [percona server mongodb](https://hub.docker.com/r/percona/percona-server-mongodb/)

## MongoDB

- [mongodb](https://www.mongodb.com/)
- [mongodb altlas](https://www.mongodb.com/es/atlas)
- [mongodb comunity server](https://www.mongodb.com/try/download/community)
- [mongodb shell](https://www.mongodb.com/products/tools/shell)
- [mongodb for vs code](https://www.mongodb.com/es/products/tools/vs-code)
- [mongodb compass](https://www.mongodb.com/products/tools/compass)
- [mongodb courses](https://learn.mongodb.com/catalog)

# Commands

MongoDB
docker run --name mongodb-dsw -v "D:\DockerImages/docker-volumes/percona-mongodb-dsw:/data/db" -p 27017:27017 -d percona/percona-server-mongodb:latest

MySQL
docker run --name ps8-dsw-h4g
-v "D:/DockerImages/docker-volumes/ps8-dsw-h4g:/var/lib/mysql"
-e MYSQL_ROOT_HOST='%'
-e MYSQL_ALLOW_EMPTY_PASSWORD="yes"
-e MYSQL_PASSWORD="dsw"
-e MYSQL_USER="dsw"
-e MYSQL_DATABASE='heroclash4geeks'
-p 3306:3306
-d percona/percona-server

docker run --name ps8-dsw-h4g -v "D:\DockerImages/docker-volumes/ps8-dsw-h4g:/var/lib/mysql" -e MYSQL_ROOT_HOST='%' -e MYSQL_ALLOW_EMPTY_PASSWORD="yes" -e MYSQL_ROOT_PASSWORD="root" -e MYSQL_USER="dsw" -e MYSQL_PASSWORD="dsw" -d mysql:latest

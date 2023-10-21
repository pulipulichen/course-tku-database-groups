# Dockerhub

- https://docs.docker.com/get-started/04_sharing_app/
- https://hub.docker.com/
- `docker image ls | head` 找出合適的名稱，例如「html-webpage-dashboard_app」
- 建立合適的repo https://hub.docker.com/
- `docker tag course-tku-database-groups-app pudding/tku:course-tku-database-groups-app-20231021-2147`
- `docker push pudding/tku:course-tku-database-groups-app-20231021-2147`
- 修改docker-compose.yaml `image: pudding/tku:course-tku-database-groups-app-20231021-2147`
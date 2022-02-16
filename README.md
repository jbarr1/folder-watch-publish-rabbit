# Create RabbitMQ server with Docker

## Steps

Run docker (pulls latest rabbit image)

```
docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq-server rabbitmq:management
```

Verify RabbitMQ server status by viewing docker logs:

```
docker logs rabbitmq-server
```

To view the RabbitMQ Management Portal:

```
http://localhost:15672/
```

Once the docker has started, run this node app

```
npm start
```

To test, write some data to /tmp/[any filename].json

```
date >> /tmp/file.json
```

https://levelup.gitconnected.com/introduction-to-rabbitmq-with-nodejs-61e2aec0c52c

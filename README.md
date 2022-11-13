# Folder Watcher - Publish file changes to RabbitMQ

There are a few things I wanted to learn in this example...

- How to watch a folder for file changes using NodeJS
- How to use RabbitMQ in docker container
- How to write a RabbitMQ client using NodeJS


## Why?

This idea is a part of a larger POC project that uses database trigger to write record changes out to a json file.  
Can we then monitor a directory for new json files, and push the content in as near as real time to a message queue.


## Installation
The below are manual steps to get RabbitMQ docker image downloaded, and then start the Node daemon listener on the local "/tmp" directory.


Run docker (pulls latest rabbit image)

```
docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq-server rabbitmq:management
```

Verify RabbitMQ server status by viewing docker logs:

```
docker logs rabbitmq-server
```

To view the RabbitMQ Management Portal:  
(Using standard user/passwords)   

```
http://localhost:15672/
```

Once docker has started, run this node app:

```
npm start
```

To test, write some data to /tmp/[any filename].json:

```
date >> /tmp/file.json
```

## Resources 

https://levelup.gitconnected.com/introduction-to-rabbitmq-with-nodejs-61e2aec0c52c

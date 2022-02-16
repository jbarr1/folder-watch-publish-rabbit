// Publishes a string to a rabbit queue

const amqp = require('amqplib');

const queue = 'MY_TEST_QUEUE';

async function sendToQueue(payload) {
    const msgBuffer = Buffer.from(JSON.stringify(payload));
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();

        await channel.assertQueue(queue);
        await channel.sendToQueue(queue, msgBuffer);
        console.log(`Sending message to ${queue} queue`);

        await channel.close();
        await connection.close();
    } catch (err) {
        console.error(err);
    }
}

module.exports = { sendToQueue };

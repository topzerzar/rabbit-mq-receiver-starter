require('dotenv').config();
const getStaticService = require('./GetStatic');

const queue = `${process.env.RABBITMQ_QUEUE}`;
exports.receiver = (connection) => {
  connection.createChannel((err, ch) => {
    ch.assertQueue(queue, { durable: true }, () => {
      ch.consume(queue, (msg) => {
        console.log(' [x] Received %s', msg.content.toString());
        const data = JSON.parse(msg.content.toString());
        getStaticService.getStatic(data.resume);
      }, { noAck: true });
    });
  });
};

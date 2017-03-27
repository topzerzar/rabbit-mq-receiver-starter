require('dotenv').config();
const amqp = require('amqplib/callback_api');
const subscriber = require('./subscribe');

const authen = `${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}`;
const host = `${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`;
const server = `amqp://${authen}@${host}`;

exports.connect = () => {
  amqp.connect(server, (error, connection) => {
    console.log('subscriber');
    subscriber.receiver(connection);
  });
};

// {
//  resume_id: 1,
//  user_id: 1,
//  email: "xxxx@xxx.com",
//  firstname: "firstname",
//  lastname: "surname",
//  address: "address",
//  region: {
//   code: ,
//   name: ,
//  },
//  province: {
//   code: ,
//   name: ,
//  },
//  district: {
//   code: ,
//   name: ,
//  },
//  subdistrict: {
//   code: ,
//   name:
//  },
//  zipcode: "10600"
//  telephone: "09000000",
//  requiredjob: "QA",
//  jobtype: {
//   code: ,
//   name: ,
//  },
//  education: [
//   level: {
//    code: ,
//    name: ,
//   },
//   institute: ,
//   gpa: ,
//   group: {
//    code: ,
//    name: ,
//   },
//  ],
// }

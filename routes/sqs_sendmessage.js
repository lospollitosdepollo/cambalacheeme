// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var params = {
   // Remove DelaySeconds parameter and value for FIFO queues
  DelaySeconds: 30,
  MessageAttributes: {

    "Se Registro": {
      DataType: "Number",
      StringValue: "1"
    }
  },
  MessageBody: "Usuario Registrado Correctamente",
  
  // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
  // MessageGroupId: "Group1",  // Required for FIFO queues
  QueueUrl: "https://sqs.us-east-2.amazonaws.com/374632472070/RegistroMensaje"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});
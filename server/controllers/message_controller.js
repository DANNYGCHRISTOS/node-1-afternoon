let messages = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).json(messages);
  },
  create: (req, res) => {
    const { text, time } = req.body;

    messages.push(id, text, time);
    id++;
    res.status(200).json(messages);
  },
  update: (req, res) => {
    console.log(req.params);
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
      // const message = messages.find(m => m.id === parseInt(req.params.id));
      // message.name = req.body.name;
    };
    res.status(200).json(message);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
    //   delete: (req, res) => {
    //     const message = messages.find(m => m.id === parseInt(req.params.id));
    //     if (!course) res.status(404);
    //     return;
    //     const i = course.indexOf(message);
    //     messages.splice(1, i);
    //     res.status(200).json(message);
  }
};

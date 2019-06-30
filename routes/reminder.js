var Reminder = require('../model/Reminder.js');

module.exports.setRoutes = function(app) {

 //Create Task
 app.post("/createReminder", (req, res) => {
    const reminder = new Reminder({
      remindername: req.body.remindername,
      reminderTime: req.body.reminderTime
    });

    reminder.save(function(err) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json({msg:"Reminder Created successfully"});
    });
  });

  app.get("/getReminder", (req,res) => {
	  Reminder.find().sort({createdAt:-1}).then((reminders) => {
		  res.status(200).json(reminders);
	  }).catch((err) => {
		  res.status(400).json(err);
	  })
  })

}
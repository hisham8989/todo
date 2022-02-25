const Todo = require('../models/TodoModel')

//** Render Landing page to interact with the ToDo app  */

module.exports.home = function (req, res) {
  Todo.find({}, function (err, tasks) {
    if (err) {
      console.log('Error is Fetching tasks from DB', err)
      return
    }
    return res.render('home', {
      title: 'ToDo | Home',
      task_list: tasks,
    })
  })
}

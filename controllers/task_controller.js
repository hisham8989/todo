// Establish Mongo Database Connection
const Todo = require('../models/TodoModel')

//** /task/create */
module.exports.create = function (req, res) {
  console.log(req.body)
  return res.redirect('back')
}

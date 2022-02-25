// Establish Mongo Database Connection
const Todo = require('../models/TodoModel')

module.exports.delete = function (req, res) {
  let ids = req.query
  for (const id in ids) {
    Todo.findByIdAndDelete(ids[id], function (err) {
      if (err) {
        console.log('Error in Deleting Contact from DB', err)
        return
      }
    })
  }
  // refresh the page from front-End
  return
}

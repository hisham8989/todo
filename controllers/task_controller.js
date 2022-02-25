// Getting Todo model to 
const Todo = require('../models/TodoModel')

// Formatting Date from Number to Alphabetical
function formatDate(date) {
  //Expected May 2, 2019
  let [year, month, day] = date.split('-')

  switch (month) {
    case '01':
      month = 'Jan'
      break
    case '02':
      month = 'Feb'
      break
    case '03':
      month = 'Mar'
      break
    case '04':
      month = 'April'
      break
    case '05':
      month = 'May'
      break
    case '06':
      month = 'June'
      break
    case '07':
      month = 'July'
      break
    case '08':
      month = 'Aug'
      break
    case '09':
      month = 'Sept'
      break
    case '10':
      month = 'Oct'
      break
    case '11':
      month = 'Nov'
      break
    case '12':
      month = 'Dec'
      break

    default:
      break
  }
  date = `${month} ${day}, ${year}`
  return date
}

//** @Route to create task /task/create */
module.exports.create = function (req, res) {
  var date
  if (req.body.deadline != '') {
    date = formatDate(req.body.deadline)
  } else {
    date = 'No Deadline'
  }
  let task = {
    description: req.body.description,
    category: req.body.category,
    deadline: date,
  }
  Todo.create(task, function (err) {
    if (err) {
      console.log('Error in creating task :', err)
    }
  })
  return res.redirect('back')
}

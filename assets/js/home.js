const addTask = document.querySelector('#add-task-btn')
const desc = document.querySelector('#descTask')
const cat = document.querySelector('#taskCategory')
const date = document.querySelector('#dateTask')

addTask.addEventListener('click', (e) => {
  descVal = desc.value.trim()
  if (descVal != '') {
    const url = '/task/create'

    var details = {
        'description': descVal,
        'category': cat.value,
        'date': date.value
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    // var data = new FormData()
    // data.append('description', descVal)
    // data.append('category', cat.value)
    // data.append('date', date.value)
    
    
        fetch(url, {
          method: 'POST',
          body: formBody,
        })
    console.log(formBody);

    // for(let val of data){
    //     console.log(val);
    // }
    // fetch(url, {
    //     method : "POST",
    //     body: data
    // })

    // const data = {
    //     description:descVal,
    //     category:cat.value,
    //     dateTask:date.value
    // }
    // var xhr = new XMLHttpRequest()
    // xhr.open('POST', url, true)
    // xhr.send(data)
  } else {
    alert('Can not Leave Description Empty ...! ')
  }
})

// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'somewhere', true);
// xhr.onload = function () {
//     // do something to response
//     console.log(this.responseText);
// };
// xhr.send(data);

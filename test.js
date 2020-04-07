var roster=[]



function addNew() {
  var nn = prompt('what name would you like to add?')
  roster.push(nn)
}

function remove() {
  var remName = prompt('what name you want to remove?')
  var index = roster.indexOf(remName)
  roster.splice(index,1)
}

function display() {
  console.log(roster)
}

var start=prompt('would you like to start web app? y/n')

// var inp=prompt('please select a operation : add,remove,display,quit')

var request='empty'

if (start=='y') {

  while (request!='quit') {
    request=prompt('please select a operation : add,remove,display,quit')
    if (request=='add') {
      addNew()
    }
    else if (request=='remove') {
      remove()
    }
    else if (request=='display') {
      display()
    }
    else {
      alert("don't recognise")
      request='quit'
    }
  }
}

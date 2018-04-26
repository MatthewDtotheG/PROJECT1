document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("infoWrap").addEventListener('submit', addInfo)

  function addInfo(){
    event.preventDefault()
    let nameInput = document.getElementById('nameInput').value
    let textInput = document.getElementById('textInput').value

    document.getElementById('demo').innerHTML += (`
      <h2>${nameInput}</h2>
      <h3>${textInput}</h3>
    `)

      // Adapter.pushInfo(nameInput, textInput)

      document.getElementById('nameInput').value = ''
      document.getElementById('textInput').value = ''


    document.getElementById('demo').innerHTML += (`
      <h2>${document.getElementById('nameInput').value}</h2>
      <h3>${document.getElementById('textInput').value}</h3>
    `)

  }
})


// build out a news feed with a name and comments from different users make it pessemisticlly

document.getElementById("infoWrap").addEventListener('submit', addInfo)

let counter = 0
function addInfo(){
  event.preventDefault()
  let nameInput = document.getElementById('nameInput').value
  let textInput = document.getElementById('textInput').value
  catchAll.push([counter, nameInput, textInput])
  counter++

  document.getElementById('demo').innerHTML += (`
    <div id="post-${counter}" class='wrapper'>
      <h2>${nameInput}</h2>
      <h3>${textInput}</h3>
      <button data-postid='${counter}' type="button" name="button">delete</button>
    </div>
  `)

  document.getElementById('demo').addEventListener('click', function(){
      let idToDelete = event.target.dataset.postid
      // document.getElementById(`post-${idToDelete}`).remove()
      // console.log(catchAll)
      document.getElementById(`demo`).innerHTML = ''
      catchAll = catchAll.filter(x => x != idToDelete)

      catchAll.forEach(x => {
          document.getElementById('demo').innerHTML += (`
            <div id="post-${x[0]}" class='wrapper'>
            <h2>${x[1]}</h2>
            <h3>${x[2]}</h3>
            <button data-postid='${x}' type="button" name="button">delete</button>
            </div>`)
    })
})
      document.getElementById('nameInput').value = ''
      document.getElementById('textInput').value = ''
}
    // Adapter.pushInfo(nameInput, textInput)

let catchAll = []

// push info to array and rerender after deleteing something

const item = document.querySelectorAll('.item span') //focus on span with class of 'item' from li
const deleteBtn = document.querySelectorAll('.fa-trash')

const itemCompleted = document.querySelectorAll('.item span.completed')

//smurf on trash can icon
Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

//uses forEach to add listeners to each item on to do list
Array.from(item).forEach((element)=>{
    element.addEventListener('click',markComplete)

})

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
})


async function deleteItem(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}



async function markComplete(){

    const itemText = this.parentNode.childNodes[1].innerText //grabs/holds the text from todo list
    
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                //takes the text and used for Update/delete in server.js
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}
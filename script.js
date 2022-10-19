let textview = document.querySelector('.textview')

function insert(num){
    document.querySelector('.textview').value += num
}

function equals(){
    try {
        textview.value = eval(textview.value)
    }catch(error) {
        textview.value = error
    }
}
  
function clean(){
    textview.value = ''
}
  
function back(){
    textview.value = textview.value.slice(0,-1)
}
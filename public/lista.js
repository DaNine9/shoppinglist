let items = ["en", "un", "lugar", "de","la","mancha"]
//let items = []
let input = document.getElementById("addElementInput")
let disp = document.getElementById("display")

document.addEventListener(onload,fillDisp())


function addItem(name, id){
    let inpVal = input.value
    items.push(inpVal) 

    let itemHtml = `<div id="elemento_n" class="input-group my-1">
                <span class="form-control">${inpVal}</span>
                <button class="btn btn-danger" onclick="delItem()">x</button>
            </div>`
    
    disp.innerHTML += itemHtml

}


function fillDisp() {

    if(items.length == 0){
        disp.innerHTML += "<i style='color:red'>la lista está vacía</i>"
    }

    for(i =0; i<items.length; i++){
        let currentItem = items[i]
        console.log(currentItem)

        let itemHtml = `<div id="elemento_n" class="input-group my-1">
                <span class="form-control">${items[i]}</span>
                <button class="btn btn-danger" onclick="delItem()">x</button>
            </div>`
        console.log(itemHtml)
    
        disp.innerHTML += itemHtml

    }
}
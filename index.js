let showmorebtn= document.querySelector('#show-more');
let showlessbtn= document.querySelector('#show-less');
let currentitem = 10;

showmorebtn.onclick =()=>{
    let boxes= [...document.querySelectorAll('.logocontainer .img')];
    for(var i = currentitem;i< currentitem +10;i++){
        boxes[i].style.display='inline-block';
    }
    currentitem+=10;
    if(currentitem>=boxes.length){
        showmorebtn.style.display='none';
        showlessbtn.style.display='inline-block'

    }
}
let allitem=20;
showlessbtn.onclick =()=>{
    console.log("dhgbkj")
    let boxes= [...document.querySelectorAll('.logocontainer .img')];
    for(var i = 10;i<currentitem;i++){
        boxes[i].style.display='none';
    }
    // currentitem+=10;
    if(currentitem>=boxes.length){
        showmorebtn.style.display='inline-block';
        showlessbtn.style.display='none';

    }
}


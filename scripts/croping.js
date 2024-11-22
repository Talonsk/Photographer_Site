const overlayConteyner = document.getElementById('overlayImg');
let overlayImg = overlayConteyner.children[0];
overlayConteyner.style.width = overlayImg.width/2 + 'px';

const circle = document.createElement('div');
circle.classList.add('img-comp-slider');
circle.style.left = overlayImg.width/2 - 50 + 'px'; // Хорошо бы вычислять и ширнину ползунка
circle.style.top = overlayImg.height/2 - 50 + 'px';

let is_mouseDown = false
let x
circle.onmousedown = e =>{
  is_mouseDown = true
};
document.onmouseup = e =>{
  is_mouseDown = false
  document.body.style.userSelect = ''
}
document.onmousemove = e =>{
  if (is_mouseDown){
    x = e.clientX
    document.body.style.userSelect = 'none'
    if (x <= overlayImg.width){
      circle.style.left = x - 50 + 'px'
      overlayConteyner.style.width = x + 'px'
      console.log()      
    }
  }
  
}

const imgContainer = document.getElementById('imgContainer');
imgContainer.removeChild(overlayConteyner);
imgContainer.appendChild(circle);
imgContainer.appendChild(overlayConteyner);
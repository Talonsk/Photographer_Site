const row = document.getElementsByClassName('row')[0];
function filterSelection(n){
    colomnsArr = Array.from(row.children);
    colomnsArr.forEach(colomn => {
        if (colomn.classList[1] == n || n == 'all'){
            colomn.style.display = 'block';
        }else{
            colomn.style.display = 'none';
        }
    });
}
filterSelection('all')

const myBtnContainer = document.getElementById('myBtnContainer');
buttonsArr = Array.from(myBtnContainer.children);
buttonsArr.forEach(button =>{
    button.addEventListener('click', activateButton.bind(null, button))
});
function activateButton(activeButton){
    buttonsArr.forEach(button =>{
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}
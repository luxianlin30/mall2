window.onload=function () {
    let oDiv = document.getElementById('wrapper');
    let aBtn = oDiv.getElementsByTagName('li');
    let aDiv = oDiv.getElementsByClassName('content')
    for (let i=0;i<aBtn.length;i++){
        aBtn[i].index = i;
        aBtn[i].onclick=function () {
            for (let i=0;i<aBtn.length;i++){
                if (aDiv[i]) {
                    aBtn[i].className = '';
                    aDiv[i].style.display='none'
                }
            }
            this.className= 'tab_active';
            aDiv[this.index].style.display='block';
        }
    }
}
function search() {
    let oDiv = document.getElementsByClassName('sort-search-page')[0];
    if (oDiv.style.display == 'none'){
        oDiv.style.display = 'block'
    }else{
        oDiv.style.display = 'none'
    }
}
function cancel() {
    let oDiv = document.getElementsByClassName('sort-search-page')[0];
    oDiv.style.display = 'none'
}
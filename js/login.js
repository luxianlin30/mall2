window.onload=function () {
   let oContent1 = document.getElementById('login-content1');
   let oContent2 = document.getElementById('login-content2');
   let aBtn1 = oContent1.getElementsByClassName('login-change')[0];
   let aBtn2 = oContent2.getElementsByClassName('login-change')[0];
   aBtn1.onclick=function () {
       oContent1.style.display='none';
       oContent2.style.display='block';
       document.getElementById('code').value=""
       document.getElementById('password').value=""
   };
    aBtn2.onclick=function () {
        oContent2.style.display='none';
        oContent1.style.display='block';
        document.getElementById('code').value=""
        document.getElementById('password').value=""
    }
}
let a = '';
let b = '';
let c = '';
function chadnge(e,btn) {
    a = e;
    if(a != '' && b != ''&&c !='') {
        document.getElementById(btn).disabled=false;
    }else{
        document.getElementById(btn).disabled=true;

    }
}
function chadnge2(e,btn) {
    b = e;
    if(a != '' && b != '') {
        document.getElementById(btn).disabled=false;
    }else{
        document.getElementById(btn).disabled=true;
    }
}

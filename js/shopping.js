let oCount = document.getElementById('count');
let oTotal = document.getElementById('total');
let oCart = document.getElementById('shopping');
let all = document.getElementById('check_all');

//选择商品
function check_goods(obj) {
    let onebox = obj.querySelectorAll("input[type='checkbox']");
    let checkBox = obj.getElementsByTagName('input')[0];
    let checkid = document.body.querySelectorAll("input[type='checkbox']");
    let a = obj.parentNode.parentNode.parentNode.querySelectorAll("input[type='checkbox']");
    let b =obj.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1];
    if (checkBox.checked) {
        checkTrigger(true, onebox);
        total();
    } else {
        checkTrigger(false, onebox);
        total();
        all.style.background = "url(img/select.png) no-repeat center";
        all.getElementsByTagName('input')[0].checked = false;
    }
    let f = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i].checked != f){
            b.style.background = "url(img/select.png) no-repeat center";
            b.getElementsByTagName('input')[0].checked = false;
            break;
        }
        b.style.background = "url(img/pay_selected.png) no-repeat center";
        b.getElementsByTagName('input')[0].checked = true;
    }

    for (let i = 0; i < checkid.length; i++) {
        if (checkid[i].checked != f){
            all.style.background = "url(img/select.png) no-repeat center";
            all.getElementsByTagName('input')[0].checked = false;
            break;
        }
        all.style.background = "url(img/pay_selected.png) no-repeat center";
        all.getElementsByTagName('input')[0].checked = true;
    }

}

//合计总价和合计数量
function total() {
    let oDiv = oCart.getElementsByClassName('store-goods');
    let sum = 0;
    let number = 0;
    for (let i = 0; i < oDiv.length; i++) {
        let check = oDiv[i].getElementsByTagName('input');
        if (check[0].checked == true) {
            let tds = oDiv[i].getElementsByTagName('span')[1];
            let tds1 = check[1].value;
            number = parseFloat(tds.innerHTML);
            sum += parseFloat(tds1);
        }
    }
    oCount.innerHTML = sum;
    oTotal.innerHTML = sum * number;

}

//加减按钮
function change(btn, n) {
    let inputs = btn.parentNode.getElementsByTagName("input");
    let amount = parseInt(inputs[0].value);
    if (amount <= 1 && n < 0) {
        return;
    }
    inputs[0].value = amount + n;
    total()
}

//单个店铺的商品全选
function singleAll(obj) {
    let allbox = obj.parentNode.querySelectorAll("input[type='checkbox']");
    let checkBox = obj.getElementsByTagName('input')[0];
    let checkid = document.body.querySelectorAll("input[type='checkbox']");
    if (checkBox.checked) {
        checkTrigger(true, allbox);
    } else {
        checkTrigger(false, allbox);
    }
    let f = true;
    for (let i = 0; i < checkid.length; i++) {
       if (checkid[i].checked != f){
           all.style.background = "url(img/select.png) no-repeat center";
           all.getElementsByTagName('input')[0].checked = false;
           break;
       }
           all.style.background = "url(img/pay_selected.png) no-repeat center";
           all.getElementsByTagName('input')[0].checked = true;
    }

}

//全选或者全部选的时候调用这个函数
function checkTrigger(flag, name) {
    for (let i = 0; i < name.length; i++) {
        name[i].checked = flag;
        if (flag) {
            name[i].parentNode.style.background = "url(img/pay_selected.png) no-repeat center";
            total()
        } else {
            name[i].parentNode.style.background = "url(img/select.png) no-repeat center";
            total()
        }
    }
}

//全选按钮
function checkAll(btn) {
    let checkName = document.getElementsByName("id");
    let btnAll = btn.getElementsByTagName('input')[0];
    if (btnAll.checked) {
        checkTrigger(true, checkName)
        btn.style.background = "url(img/pay_selected.png) no-repeat center";
    } else {
        checkTrigger(false, checkName)
        btn.style.background = "url(img/select.png) no-repeat center";
    }
}
//删除一项
let  oItem = document.getElementsByClassName('good-list');
document.getElementById('countNum').innerText= oItem.length;
function Delete(btn) {
    if (oItem.length ==1){
        oCart.removeChild(btn.parentNode.parentNode.parentNode.parentNode)
    }else {
        btn.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode);
    }
}
//跳转到订单页面
function Count() {
    window.location.href='write_order.html';
}
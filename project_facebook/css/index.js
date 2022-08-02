// button oppen messenger and exit userbox , notification
function myFuction(){
    document.getElementById('messenger').style.display='block'; 
    document.getElementById('fun-user-box').style.display='none';
    document.getElementById('notification').style.display='none';
}
// button exit messenger
function messenger_bt_exit(){
    document.getElementById('messenger').style.display='none';
}
// oppen user box and exit messenger , notification
function userBox(){
    document.getElementById('fun-user-box').style.display='block';
    document.getElementById('notification').style.display='none';
    document.getElementById('messenger').style.display='none';
}
//  exit userbox
function userbox_bt_exit(){
    document.getElementById('fun-user-box').style.display='none'
}
// read more oppen
function readmore() {
    document.getElementById('more').style.display='block';
    document.getElementById('read-more').style.display='none';
    document.getElementById('hide-more').style.display='block';
}
// read more hide
function hidemore() {
    document.getElementById('read-more').style.display='block';
    document.getElementById('more').style.display='none';
    document.getElementById('hide-more').style.display='none';
}
// oppen notification and exit messenger , user box
function notification_bt_oppen(){
    document.getElementById('notification').style.display='block';
    document.getElementById('fun-user-box').style.display='none';
    document.getElementById('messenger').style.display='none';
}
// exit notification
function notification_bt_exit(){
    document.getElementById('notification').style.display='none';
}
var capsLock = document.getElementById('caps-lock');

var textarea = document.getElementById('textarea');

//var deleteAll = document.getElementById('shift');

function capsLockOn(result) {
    if (result === "off") {
        capsLock.value = "on";
    }
    if (result === "on") {
        capsLock.value = "off";
    }
}

function display(result) {
    if (capsLock.value === "on") {
        textarea.value = textarea.value + result.toUpperCase();
    } else {
        textarea.value = textarea.value + result;
    }
}

function backSpace() {
    textarea.value = textarea.value.slice(0, -1);
}

function enter() {
    textarea.value = textarea.value + '\n';
}

function deleteAll(){
    document.getElementById("textarea").value = '';
}

function myAlert() {
    alert(textarea.value);
}


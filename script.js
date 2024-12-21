function download(){
    var element = document.createElement('a');
    element.setAttribute('href', 'V1.7.zip');
    element.setAttribute('download', 'V1.7.zip');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function redirect(togo){
    window.location.replace(togo);
    document.location.href=togo
}
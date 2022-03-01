let camId = document.getElementById('camId');
let camera = navigator.mediaDevices.getUserMedia;

if (camera) {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(function (streamLive) {
        camId.srcObject = streamLive;
    }).catch(function (error) {
        console.log('Error! Please try again.');
    });
}

let canvas = document.getElementById('canvasId');
let capture = document.getElementById('captureId');
let context = canvas.getContext('2d');
capture.addEventListener('click', function(){
    context.drawImage(camId,0,0,320,320);
})
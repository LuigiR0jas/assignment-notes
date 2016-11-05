var stream,
    mediaRecorder,
    chunks = [];

navigator.mediaDevices.getUserMedia({audio:true, video: true})

.then(function(ms){
  stream = ms;
  console.log('User Accepted');
  captureVideo.srcObject = stream;
  console.log(captureVideo.srcObject);
})
.catch(function(err){
  console.log(err);
});

function startRecording(){
  chunks = [];
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.start();
  mediaRecorder.ondataavailable = processChunk;
  recordButton.textContent = "Dejar de grabar";
  recordButton.onclick = stopRecording;
  console.log('recording...');
}

function stopRecording(){
  console.log('Stopped');
  mediaRecorder.stop();
  console.log(chunks);
  var blob = new Blob(chunks, {
    type: 'video/webm;codecs=opus'
  });
  savedVideo.src = window.URL.createObjectURL(blob);
  recordButton.onclick = startRecording;
  recordButton.textContent = "Grabar";
}

function processChunk(c){
  chunks.push(c.data);
}

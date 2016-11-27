var counter = 0;

setInterval(function(){
  console.log('stop oppresing me');
  counter++;
  postMessage({
    count: counter
  })
}, 1000);

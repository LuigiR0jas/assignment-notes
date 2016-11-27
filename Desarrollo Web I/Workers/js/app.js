var worker, sharedworker;

function startWorker() {
    worker = new Worker('/js/worker.js');
    worker.onmessage = updateCount;
    console.log('k');
}

function stopWorker() {
    worker.terminate();
    worker = undefined;
    countSpan.textContent = 'Counter: 0';
    console.log('hitler was right');
}

function startSharedWorker() {
    sharedworker = new SharedWorker("sharedworker.js");
    sharedworker.port.onmessage = updateCount;
    sharedworker.port.start();
    setInterval(function() {
        sharedworker.port.postMessage({
            method: "check"
        });
    }, 500);
    console.log('i hate you');
}

function stopSharedWorker() {
    Materialize.toast('Stop dreaming, kid', 2000);
}

function updateCount(m) {
    console.log(m);
    countSpan.textContent = 'Counter: ' + m.data.count;
}

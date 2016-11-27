var count = 0,
    workerInterval;


this.onconnect = function(e) {
    var port = e.ports[0];
    port.postMessage("Hi");
    port.onmessage = function(m) {
        var response;
        port.postMessage("Hi");
        // switch (m.data.method) {
        //     case "check":
        //         response = {
        //             count: count
        //         }
        //         break;
        // }
        // port.postMessage(response);
    };
};

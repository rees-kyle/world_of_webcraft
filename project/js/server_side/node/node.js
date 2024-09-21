/* 
Node.js:
- runtime environment to run JavaScript on the server side
- bult on Chrome's V8 JavaScript engine
- known for its non-blocking, event-driven architecture, for building scalable and efficient network applications
/* 


/* 
key features:
- asynchronous and event-driven: 
    all APIs of Node.js are asynchronous (non-blocking), a Node.js server never waits for an API to return data. 
    the server moves to the next API after calling it, a notification mechanism of events helps the server get a response from the previous API
- very fast:
    Node.js library is very fast in code execution due to Google Chrome's V8 engine
- single-threaded but highly scalable:
    single-threaded model with event looping
    single-thread program can provide service to a much larger number of requests than traditional servers
    highly scalable, as opposed to traditional servers which create limited threads to handle requests
- no buffering:
    these applications simply output the data in chunks
/* 


/*
steps:
1. installation: 
    - download the Node.js installer from the official Nopde.js website
    - run the installer, which also installs the Node Package Manager (npm)
    - verify the installation by running 'node -v ; npm -v' in bash
2. create 'server.js' and add code
3. run the server; 'node server.js' in bash
4. open your browser and go to http://127.0.0.1:3000/
*/
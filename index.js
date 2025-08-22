const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`
   ____        _   _                 
  / __ \\      | | (_)                
 | |  | |_ __ | |_ _ _ __   ___  ___ 
 | |  | | '_ \\| __| | '_ \\ / _ \\/ __|
 | |__| | | | | |_| | | | |  __/\\__ \\
  \\____/|_| |_|\\__|_|_| |_|\\___||___/
                                      
Hello from Anton's Workflow 🚀
CI/CD pipeline — commit #2 ✅
\n`);
});

server.listen(port, () => {
  console.log(`Server started...`);
});
const { createServer } = require("http");
const { parse } = require("url");
const print = console.log;
const port = parseInt(process.env.FUNCTIONS_CUSTOMHANDLER_PORT || "3000", 10);
const serverOptions = {
    maxHeaderSize: 81920
};

const server = createServer(serverOptions, async (req, res) => {
    try {
        console.log(req.url)
        let parsedUrl = parse(req.url, true);
        if (parsedUrl.pathname.startsWith("/api/next_function")) {
            res.writeHead(302, {
                'Location': 'https://www.google.com'
                //add other headers here...
            });
            res.end();
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World!');
        }

    } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
    }
});

server.listen(port);
server.on("error", (e) => { print(e); throw e; });
server.on("close", () => print("server is closing"));

print("listening on port: " + port);

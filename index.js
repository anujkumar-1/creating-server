const http = require('http');
const server = http.createServer(function (req, res) {
    const Url=req.url;

    if(Url === "/home"){
        res.write("<html>")
        res.write("<body><h1>Welcome home</h1></body>")
        res.write("</html")
        return res.end()
    }
    else if(Url === "/about"){
        res.write("<html>")
        res.write("<body><h1>Welcome to About Us page</h1></body>")
        res.write("</html")
        return res.end()
    }
    else if(Url === "/node"){
        res.write("<html>")
        res.write("<body><h1>Welcome to my Node Js project</h1></body>")
        res.write("</html")        
        return res.end()
    }
    else {
        res.write("<html>")
        res.write("<body><h1>Welcome to my Homepage</h1></body>")
        res.write("</html") 
    }
})

server.listen(3000)

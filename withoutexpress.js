const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
const url=req.url
const method=req.method

if (url==='/'){

    fs.readFile('msgData.txt',{encoding:'utf-8'},(err,data)=>{
                if (err){
                    console.log(err)
                }

                res.write(`A
    
                <html>
            <head>
              <title>Example Form</title>
            </head>
            <body>
              <p>${data}</p>
              <form action="/message" method="post">
    <label for="text-input">Text Input:</label>
    <input type="text" id="text-input" name="text-input" required>
    <br>
    <input type="submit" value="Submit">
  </form>
            </body>
            </html>
            
                `)

                return res.end()
    })

    
 
    
}

if (url==='/message' && method==='POST'){
    const body=[]
    req.on('data',(chunk)=>{
        body.push(chunk)
    })

    req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString()
        const message=parsedBody.split('=')[1]
        fs.writeFileSync('msgData.txt',message)
    })

   res.statusCode=302
   res.setHeader('Location','/')
   return res.end()
}



})

server.listen(3000)
const generateResponse=(res,status,data)=>{
    let contentType=status==404?"text/plain":'application/json'
  res.writeHead(status,{'Content-Type':contentType});  
  res.end(JSON.stringify(data));
}
//30:00

module.exports = generateResponse;
const http=request('http');
const router=request('./router.js')
const PORT=3000;
const server=http.createServer((req,res)=>{
    const {methos,req}=req;

});
server.listen(PORT,()=>{
    console.log(`Server listening on PORT:${PORT}`)

})
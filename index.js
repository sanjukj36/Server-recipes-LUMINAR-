const jsonServer = require('json-server');
const MPServer = jsonServer.create();
const middleware = jsonServer.defaults();
const router = jsonServer.router('db.json');
const PORT = process.env.PORT || 3000;

MPServer.use(middleware);
MPServer.use(router);


MPServer.listen(PORT,()=>{
    console.log(`Media Player Server started at port ${PORT}`);
})
const {LoginRequest} = require("../js_client/stream/stream_pb")
const {HelloServiceClient} = require("../js_client/stream/stream_grpc_web_pb")
global.XMLHttpRequest = require('xhr2');

const hello_service_client = new HelloServiceClient("http://localhost:8000");
var log = new LoginRequest();
log.setUsername("shane");
log.setPassword("mossmoss");
hello_service_client.login(log,{},(err , response)=>{
    if(err){
        console.log("Error");
        console.log(err)
    }else{
        console.log(response)
    }
})


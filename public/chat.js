$(document).ready(()=>{
    const socket = io();
    var myname = $("#myname").html();
    socket.emit("event",{name:myname,email:"samudrala"});
    if($("#from").val()=="aravind"){
    socket.on("event",(data)=>{
        console.log(`Data from server is: ${JSON.stringify(data)}`)
    });
   }
});
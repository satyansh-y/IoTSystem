$(document).ready(function(){

        var WEBSOCKET_ROUTE = "/ws";

        if(window.location.protocol == "http:"){
            //localhost
            var ws = new WebSocket("ws://" + window.location.host + WEBSOCKET_ROUTE);
            }
        else if(window.location.protocol == "https:"){
            //Dataplicity
            var ws = new WebSocket("wss://" + window.location.host + WEBSOCKET_ROUTE);
            }

        ws.onopen = function(evt) {
            $("#ws-status").html("Connected");
            };

        ws.onmessage = function(evt) {
            };

        ws.onclose = function(evt) {
            $("#ws-status").html("Disconnected");
            };

        $("#ON").click(function(){
            ws.send("ON");
            });

        $("#OFF").click(function(){
            ws.send("OFF");
            });

        $("#Green").click(function(){
            ws.send("Green");
            });

        $("#Red").click(function(){
            ws.send("Red");
            });
        
            $("#Blue").click(function(){
            ws.send("Blue");
            });
        
        $("#White").click(function(){
            ws.send("White");
            });
    
        $("#Yellow").click(function(){
            ws.send("Yellow");
            });            

        $("#Purple").click(function(){
             ws.send("Purple");
            });

        $("#Send").click(function(){
            var Green= $("#Green_slider").value;
            var Red= $("#Red_slider").value;
            var Blue= $("#Blue_slider").value;
            Green = String(Green);
            Blue = String(Blue);
            Red = String(Red);

             ws.send("Send " + Red + " " + Green + " " + Blue);
            });


      });

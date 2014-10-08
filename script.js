window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = window.innerWidth,
        height = window.innerHeight,
        length, divergence, reduction, line_width, start_points = [];
    
    canvas.width = width;
    canvas.height = height;
    
    init();
    
    function init()
    {
        context.fillStyle = "white";
        context.fillRect(0,0,width,height);
        length = 100 + Math.round(Math.random()*50);
        divergence = 10 + Math.round(Math.random()*50);
        reduction = Math.round(50 + Math.random()*20)/100;
        line_width = 10;
        
        var trunk = {x:width/2,y:length+50,angle:90};
        
        start_points = [];
        start_points.push(trunk);
        context.beginPath();
        context.moveTo(trunk.x,height-50);
        context.lineTo(trunk.x,height-trunk.y);
        context.strokeStyle = "black";
        context.lineWidth = line_width;
        context.stroke();
        
        branches();
    }
    
    function branches()
    {
        
    }
    
}
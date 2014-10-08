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
        length = length*reduction;
        line_width = line_width*reduction;
        context.lineWidth = line_width;
        
        var new_start_points = [];
        
        context.beginPath();
        
        for (var i = 0; i < start_points.length; i++)
        {
            var sp = start_points[i],
                end_point_first = get_endpoint(sp.x,sp.y,sp.angle+divergence,length),
                end_point_second = get_endpoint(sp.x,sp.y,sp.angle-divergence,length);
            
            context.moveTo(sp.x,height-sp.y);
            context.lineTo(end_point_first.x,height-end_point_first.y);
            context.moveTo(sp.x,height-sp.y);
            context.lineTo(end_point_second.x,height-end_point_second.y);
            
            end_point_first.angle = sp.angle+divergence;
            end_point_second.angle = sp.angle-divergence;
            
            new_start_points.push(end_point_first);
            new_start_points.push(end_point_second);
        }
        
        if (length < 10) 
            context.strokeStyle = "green";
        else context.strokeStyle = "black";
        
        context.stroke();
        start_points = new_start_points;
        
        if (length > 2)
            setTimeout(branches, 50);
        else setTimeout(init, 500);
    }
    
    function get_endpoint(x,y,a,length)
    {
        var endpointx = x + length*Math.cos(a*Math.Pl/180),
            endpointy = y + length*Math.sin(a*Math.Pl/180);
            
        return{x:endpointx,y:endpointy};
    }
    
}
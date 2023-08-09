var canvas= new fabric.Canvas("my_canvas");
playerX= 10;
playerY=10;

block_ancho= 30;
block_alto= 30;

var player_object= "";
var block_object= "";

function playerUpdate(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,left:playerX
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        block_object= Img;
        block_object.scaleToWidth(block_ancho);
        block_object.scaleToHeight(block_alto)
        block_object.set({
            top:playerY,left:playerX
        });
        canvas.add(block_object);
    }); 
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=="80"){
        console.log("Presionaste p y Shift al mismo tiempo");
        block_ancho=block_ancho+10;
        block_alto=block_alto+10;
        document.getElementById("Ancho_actual").innerHTML=block_ancho;
        document.getElementById("Altura_actual").innerHTML=block_alto;
    }

    if(e.shiftKey==true && keyPressed=="77"){
        console.log("Presionaste m y Shift al mismo tiempo");
        block_ancho=block_ancho-10;
        block_alto=block_alto-10;
        document.getElementById("Ancho_actual").innerHTML=block_ancho;
        document.getElementById("Altura_actual").innerHTML=block_alto;
    }

    if(keyPressed=="38"){
     up();
     console.log("arriba");
    }

    if(keyPressed=="40"){
        down();
        console.log("abajo");
       }
    
       if(keyPressed=="37"){
        left();
        console.log("izquierda");
       }

       if(keyPressed=="39"){
        right();
        console.log("derecha");
       }

      if(keyPressed=="87"){
        new_image("wall.jpg");
        console.log("w");
      }

      if(keyPressed=="71"){
        new_image("ground.png");
        console.log("g");
      }

      if(keyPressed=="76"){
        new_image("light_green.png");
        console.log("l");
      }

      if(keyPressed=="84"){
        new_image("trunk.jpg");
        console.log("t");
      }

      if(keyPressed=="82"){
        new_image("roof.jpg");
        console.log("r");
      }

      if(keyPressed=="89"){
        new_image("yellow_wall.png");
        console.log("y")
      }

      if(keyPressed=="68"){
        new_image("dark_green.png");
        console.log("d")
      }

      if(keyPressed=="85"){
        new_image("unique.png");
        console.log("u")
      }

      if(keyPressed=="67"){
        new_image("cloud.jpg");
        console.log("c")
      }
}

 function up(){
    if(playerY>=0){
      playerY=playerY-block_alto;
      console.log("Altura del bloque= " +block_alto ); 
      console.log("Cuando se presiona la flecha hacia arriba, X= " + playerX + ", Y= " + playerY );
      canvas.remove(player_object);
      playerUpdate();
    }    
 }

 function down(){
    if(playerY<=500){
      playerY=playerY+block_alto;
      console.log("Altura del bloque= " +block_alto ); 
      console.log("Cuando se presiona la flecha hacia abajo, X= " + playerX + ", Y= " + playerY );
      canvas.remove(player_object);
      playerUpdate();
    }
}

function left(){
    if(playerX>0){
      playerX=playerX-block_ancho;
      console.log("Anchura del bloque= " +block_ancho ); 
      console.log("Cuando se presiona la flecha hacia la izquierda, X= " + playerX + ", Y= " + playerY );
      canvas.remove(player_object);
      playerUpdate();
    }
}

function right(){
    if(playerX<=850){
      playerX=playerX+block_ancho;
      console.log("Anchura del bloque= " +block_ancho ); 
      console.log("Cuando se presiona la flecha hacia la derecha, X= " + playerX + ", Y= " + playerY );
      canvas.remove(player_object);
      playerUpdate();
    }
}
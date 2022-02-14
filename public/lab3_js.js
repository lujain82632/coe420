/*
function increaseSize(){
	var p = document.getElementsByTagName('div');
	   for(i=0;i<p.length;i++) {
	      p[i].style.fontSize = "xx-large";
	   }
	   var q = document.getElementsByTagName('body');
	   for(i=0;i<q.length;i++) {
	      q[i].style.fontSize = "xx-large";
	   }
							
}
*/
function increaseSize(element){
    var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    if (currentSize) {    
        currentSize = parseFloat(currentSize.replace("px",""));
        element.style.fontSize = (currentSize * 1.2) + "px";
        for(var i=0; i < element.children.length; i++){
            changeFontSize(element.children[i]);
        }
    }
}

function resetSize(){
	var p = document.getElementsByTagName('div');
	   for(i=0;i<p.length;i++) {
	      p[i].style.fontSize = "inherit";
	   }
	   var p = document.getElementsByTagName('body');
	   for(i=0;i<p.length;i++) {
	      p[i].style.fontSize = "inherit";
	   }
}
/*
function fontType(){
	var p = document.getElementsByTagName('body');
	   for(i=0;i<p.length;i++) {
	      p[i].style.fontFamily="Comic Sans MS, Comic Sans;";
	   }
}
*/
function fontType(element){
    element.style.fontFamily="Papyrus";
    for(var i=0; i < element.children.length; i++){
        changeFont(element.children[i]);
    }
}


function darkMode(){
	var element = document.body;
	element.classList.toggle("dark");

}
function confirmBox(){
    if(confirm("Do you want to continue?")){
        console.log("You pressed Ok");
    }else{
        console.log("You pressed cancel");
    }
}
			
  
		        
	       
 
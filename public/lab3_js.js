
function increaseSize(){
	var p = document.getElementsByTagName('div');
	   for(i=0;i<p.length;i++) {
	      p[i].style.fontSize = "xx-large";
	   }
							
}
function resetSize(){
	var p = document.getElementsByTagName('div');
	   for(i=0;i<p.length;i++) {
	      p[i].style.fontSize = "inherit";
	   }
}
function fontType(){
	var p = document.getElementsByTagName('div');
	   for(i=0;i<p.length;i++) {
	      p[i].style.fontFamily="Comic Sans MS, Comic Sans;";
	   }
}
function darkMode(){
	var element = document.body;
	element.classList.toggle("dark");

}

function confirmBox(){
	 var text;
	 if(submit("Do you want to continue?")){
		text="You pressed Ok";
		}
	else{
		text="You pressed cancel"
	}
	document.getElementByClass("form-group").outerHTML=text;
}
			
  
		        
	       
 
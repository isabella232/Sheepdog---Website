function init() {
	var coll = document.getElementsByClassName("collapsible");
	var i;
	console.log(coll.length)
	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var content = this.nextElementSibling;
	    if (content.style.maxHeight){
	    	console.log("a");
	      content.style.maxHeight = null;
	    } else {
	    	    	console.log("b");

	      content.style.maxHeight = content.scrollHeight + "px";
	    }
	  });
	}
}
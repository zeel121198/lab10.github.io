  

  function drag(p) //drag function 
  {
      p.dataTransfer.setData("text", p.target.id);
  }
  
  function drop(p) // drop function
  {
    p.preventDefault();
    var data = p.dataTransfer.getData("text");
    p.target.appendChild(document.getElementById(data));
  }

  function allowDrop(p) // allow drop
  {
    p.preventDefault();
  }

$(".item").each(function(i,item){
  let rowLine = i + 1;

  $(item).css("grid-row", rowLine);

  if(rowLine % 2 == 0)
  {
    //evens
    $(item).css("grid-column",2);
    $(item).css("justify-self", "start");
  }
  else
{
  //odd
  $(item).css("grid-column",1);
  $(item).css("justify-self","end")
  $(item).click(function(){
    $(item).text("hello! I'm row"+ rowLine);

  });
}
});
AOS.init();
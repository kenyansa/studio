$ (function() {

    $("#design1").on("click", function(){
      $("#design").toggle();
      $("#design-image").toggle();
    })
  
    $("#development1").on("click", function(){
      $("#development").toggle();
      $("#development-image").toggle();
    })
  
    $("#productDevelopment1").on("click", function(){
      $("#productManagement").toggle();
      $("#productManagement-image").toggle();
    })
})
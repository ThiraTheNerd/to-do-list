
  function Activity(name){
    this.activityName = name;
  }

$(document).ready(function(){
  $("form#my-todo").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#activity").val();

    var newTask = new Activity(inputtedTask);

    $("p#no-task").hide();
    $("ul#my-tasks").append("<li><span class = 'new-task'>" +newTask.activityName+ "</span></li>");

    $("input#activity").val("");

});
});
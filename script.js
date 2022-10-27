$(document).ready(function () {

    var current = moment().format("MMM Do, YYYY, h:mm:ss");
    $("#currentDay").text(current);
    
   
    function updateTime() {
      $('#currentDay').html(moment().format("MMM Do, YYYY, h:mm:ss"));
    }
    setInterval(updateTime, 1000);
    
    
      
    $(".saveBtn").on("click", function() { 
      var task = $(this).siblings(".taskInput").val();
      var time = $(this).parent().attr("id");
      const mainContainer = document.getElementById("jumbotron");
    
    
      mainContainer.innerHTML = "";
      if (task === "") {
        window.alert("Please enter a task before saving");
        return;
      } else {
        const saveAlert = document.createElement("h3");
        saveAlert.textContent = "Your task has been saved to Local Storage! ✔️";
        mainContainer.append(saveAlert);
    
    
      localStorage.setItem(time, task);
      }
      });
    
    
    $("#hour09 .taskInput").val(localStorage.getItem("hour09"));
    $("#hour10 .taskInput").val(localStorage.getItem("hour10"));
    $("#hour11 .taskInput").val(localStorage.getItem("hour11"));
    $("#hour12 .taskInput").val(localStorage.getItem("hour12"));
    $("#hour13 .taskInput").val(localStorage.getItem("hour13"));
    $("#hour14 .taskInput").val(localStorage.getItem("hour14"));
    $("#hour15 .taskInput").val(localStorage.getItem("hour15"));
    $("#hour16 .taskInput").val(localStorage.getItem("hour16"));
    $("#hour17 .taskInput").val(localStorage.getItem("hour17"));
    
    
    function blockUpdate() {
      var currentHour = moment().hour();
    
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    
        if (blockHour < currentHour) {
          $(this).addClass("past");
        
        } else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
    
        }
      });
     }
    
      blockUpdate();
    
    });
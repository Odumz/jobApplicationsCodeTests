import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  <p>button count: <span id="counter">0</span></p>
  <button id="mainButton">Increase</button>
</div>`;

$(function() {
  var count = 0, output = $('#counter');

  setInterval(function(){
    output.html(count)
  }, 1);

  $('#mainButton').click(function() {
    count += 1;
  });
});

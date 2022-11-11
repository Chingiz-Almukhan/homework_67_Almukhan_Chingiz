let btn = document.getElementById("add-item-btn");
btn.onclick = function() {
  let div = document.getElementById("container");
  div.innerHTML += `<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><p>I'll close in 5 sec</p></div></div>`;
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.remove();
  }
  function closeModal() {
    modal.remove();
  }
setTimeout(closeModal, 5000);
}





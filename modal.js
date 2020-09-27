const modal = {
  showModal: function (ev) {
    ev.preventDefault();
    let modal = document.querySelector(".modal");
    modal.classList.remove("off");
    modal.classList.add("on");
  },
  showOverlay: function (ev) {
    ev.preventDefault();
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("hide");
    overlay.classList.add("show");
    this.showModal(ev);
  },
  hideModal: function (ev) {
    let modal = document.querySelector(".modal");
    modal.classList.remove("on");
    modal.classList.add("off");
  },
  hideOverlay: function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("show");
    overlay.classList.add("hide");
    this.hideModal(ev);
  },
  init: function (ev) {
    document.querySelector("p").addEventListener("click", function (event) {
      modal.showOverlay(event);
    });
    document
      .querySelector(".close-btn")
      .addEventListener("click", function (ev) {
        modal.hideOverlay(ev);
      });
  },
};

document.addEventListener("DOMContentLoaded", () => modal.init());

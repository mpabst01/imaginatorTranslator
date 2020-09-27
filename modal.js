const modal = {
  showModal: function (ev) {
    ev.preventDefault();
    let modal = $(".modal");
    modal.removeClass("off");
    modal.addClass("on");
  },
  showOverlay: function (ev) {
    ev.preventDefault();
    let overlay = $(".overlay");
    overlay.removeClass("hide");
    overlay.addClass("show");
    this.showModal(ev);
  },
  hideModal: function (ev) {
    let modal = $(".modal");

    modal.removeClass("on");
    modal.addClass("off");
  },
  hideOverlay: function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let overlay = $(".overlay");
    overlay.removeClass("show");
    overlay.addClass("hide");
    this.hideModal(ev);
  },
  init: function () {
    $(".close-btn").on("click", function (ev) {
      modal.hideOverlay(ev);
    });
  },
};

$(function () {
  modal.init();
});

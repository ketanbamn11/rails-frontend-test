import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal"];

  show(e) {
    e.preventDefault();

    this.modalTarget.classList.remove("hidden");
    document.querySelector(".desktop-overlay").style.zIndex = 0;
    this.modalTarget.querySelectorAll("x-transition").forEach((transition) => {
      transition.open = true;
    });
  }

  hide(e) {
    e.preventDefault();

    this.modalTarget.classList.add("hidden");
    this.modalTarget.querySelectorAll("x-transition").forEach((transition) => {
      transition.open = false;
    });

    document.querySelector(".desktop-overlay").style.zIndex = 1;
    this.dispatch("closed");
  }
}

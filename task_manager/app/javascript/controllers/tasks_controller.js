import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("task controller connect called");
    console.log(this.element);
  }
  toggle(e) {
    console.log("toggle called");
    const id = e.target.dataset.id;
    const csrfToken = document.querySelector("[name='csrf-token']").content;

    fetch(`/tasks/${id}/toggle`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      body: JSON.stringify({
        completed: e.target.checked,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          console.log(response.ok);
          return response.json();
        } else {
          throw new Error("Task Not Found");
        }
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((err) => {
        alert(`Somthing went wrong: ${err} `);
      });
  }

  delete(e) {
    const confirmed = confirm("are you sure you want to delete this task?");
    if (!confirmed) {
      console.log("NOT confirmed:", confirmed);
      e.preventDefault();
    }
  }
}

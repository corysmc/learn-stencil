import { Component } from "@stencil/core";

@Component({
  tag: "sl-welcome",
  styleUrl: "welcome.css"
})
export class Welcome {
  render() {
    return (
      <div>
        <h1>Welcome to Learn StencilJS!</h1>
        <ion-button href="/courses">Learning Center</ion-button>
      </div>
    );
  }
}

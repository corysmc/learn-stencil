import { Component } from "@stencil/core";

@Component({
  tag: "sl-learning-center",
  styleUrl: "learning-center.css"
})
export class LearningCenter {
  signOut() {
    window["firebase"].auth().signOut();
  }

  render() {
    console.log("render() learning center");
    return (
      <ion-split-pane>
        <ion-menu>
          <ion-header>
            <ion-toolbar>
              <ion-title>Learn StencilJS</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-item>LIST ITEM</ion-item>
            </ion-list>
            <ion-button
              color="danger"
              expand="full"
              fill="outline"
              onClick={() => this.signOut()}
            >
              Sign Out
            </ion-button>
          </ion-content>
        </ion-menu>
        <ion-nav main />
      </ion-split-pane>
    );
  }
}

import { Component } from "@stencil/core";

@Component({
  tag: "sl-learning-center",
  styleUrl: "learning-center.css"
})
export class LearningCenter {
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
          </ion-content>
        </ion-menu>
        <ion-nav main />
      </ion-split-pane>
    );
  }
}

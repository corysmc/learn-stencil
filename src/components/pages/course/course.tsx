import { Component, Prop } from "@stencil/core";

@Component({
  tag: "sl-course",
  styleUrl: "course.css"
})
export class Course {
  @Prop()
  courseSlug: string;

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Course: {this.courseSlug}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>Course Content</ion-content>
    ];
  }
}

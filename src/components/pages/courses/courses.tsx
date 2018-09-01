import { Component } from "@stencil/core";

@Component({
  tag: "sl-courses",
  styleUrl: "courses.css"
})
export class Courses {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Courses!</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-item href="/courses/course-1">Course 1</ion-item>
          <ion-item href="/courses/course-2">Course 2</ion-item>
          <ion-item href="/courses/course-3">Course 3</ion-item>
          <ion-item href="/courses/course-4">Course 4</ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}

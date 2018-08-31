import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Learn StencilJS</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <h1>Welcome to Learn Stencil JS!</h1>

        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
      </ion-content>
    ];
  }
}

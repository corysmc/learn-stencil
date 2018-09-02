import { Component, Prop, Listen, State } from "@stencil/core";
import firebase from "@firebase/app";
import "@firebase/auth";

var config = {
  apiKey: "AIzaSyDbYlma9rfiEyTa_ZA1hbQEauQ2AwQSb4g",
  authDomain: "learn-stencil.firebaseapp.com",
  databaseURL: "https://learn-stencil.firebaseio.com",
  projectId: "learn-stencil",
  storageBucket: "",
  messagingSenderId: "138497418547"
};
firebase.initializeApp(config);
window["firebase"] = firebase;
// ^^ needed for firebaseui

@Component({
  tag: "sl-app",
  styleUrl: "app.css"
})
export class App {
  @State()
  isAuthenticated: boolean;
  @State()
  authLoaded: boolean = false;
  @State()
  hasLoggedIn: boolean = localStorage.getItem("sl-logged-in") === "true";

  @Prop({ connect: "ion-toast-controller" })
  toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  componentDidLoad() {
    console.log("Component has been rendered");
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // is authenticated
        this.isAuthenticated = true;
        localStorage.setItem("sl-logged-in", "true");
      } else {
        // is not authenticated
        this.isAuthenticated = false;
        this.hasLoggedIn = false;
        localStorage.clear();
      }
      this.authLoaded = true;
    });
  }
  @Listen("window:swUpdate")
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: "New version available",
      showCloseButton: true,
      closeButtonText: "Reload"
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route component="sl-storefront">
          {/* Outside app (marketing / not logged in) */}
          <ion-route url="/" component="sl-welcome" />
        </ion-route>
        <ion-route component="sl-learning-center">
          {/* Inside app */}
          <ion-route url="/courses" component="sl-courses" />
          <ion-route url="/courses/:courseSlug" component="sl-course" />
        </ion-route>
        {this.handleRedirects()}
      </ion-router>
    );
  }

  handleRedirects() {
    return this.hasLoggedIn
      ? null
      : this.isAuthenticated
        ? null
        : this.kickOutOfLearningCenter();
  }

  kickOutOfLearningCenter() {
    return (
      <ion-route-redirect from={this.isAuthenticated ? null : "/*"} to="/" />
    );
  }

  render() {
    console.log("render() sl-app", this.isAuthenticated);
    return (
      <ion-app>
        {this.renderRouter()}
        <ion-nav />
      </ion-app>
    );
  }
}

import { Component, Prop, Listen } from "@stencil/core";

@Component({
  tag: "sl-app",
  styleUrl: "app.css"
})
export class App {
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

  render() {
    console.log("render() sl-app");
    return (
      <ion-app>
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
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}

import { Component } from "@stencil/core";

@Component({
  tag: "sl-storefront",
  styleUrl: "storefront.css"
})
export class Storefront {
  render() {
    console.log("render() storefront");
    return <ion-nav />;
  }
}

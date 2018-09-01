import { TestWindow } from '@stencil/core/testing';
import { Storefront } from './storefront';

describe('sl-storefront', () => {
  it('should build', () => {
    expect(new Storefront()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStorefrontElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Storefront],
        html: '<sl-storefront></sl-storefront>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

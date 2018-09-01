import { TestWindow } from '@stencil/core/testing';
import { App } from './app';

describe('sl-app', () => {
  it('should build', () => {
    expect(new App()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [App],
        html: '<sl-app></sl-app>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

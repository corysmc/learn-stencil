import { TestWindow } from '@stencil/core/testing';
import { SignIn } from './sign-in';

describe('sl-sign-in', () => {
  it('should build', () => {
    expect(new SignIn()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSignInElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SignIn],
        html: '<sl-sign-in></sl-sign-in>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

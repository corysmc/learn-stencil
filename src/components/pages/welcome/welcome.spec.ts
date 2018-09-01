import { TestWindow } from '@stencil/core/testing';
import { Welcome } from './welcome';

describe('sl-welcome', () => {
  it('should build', () => {
    expect(new Welcome()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLWelcomeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Welcome],
        html: '<sl-welcome></sl-welcome>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

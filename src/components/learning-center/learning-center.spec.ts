import { TestWindow } from '@stencil/core/testing';
import { LearningCenter } from './learning-center';

describe('sl-learning-center', () => {
  it('should build', () => {
    expect(new LearningCenter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLearningCenterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LearningCenter],
        html: '<sl-learning-center></sl-learning-center>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

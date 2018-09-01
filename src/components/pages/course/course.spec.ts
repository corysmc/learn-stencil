import { TestWindow } from '@stencil/core/testing';
import { Course } from './course';

describe('sl-course', () => {
  it('should build', () => {
    expect(new Course()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCourseElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Course],
        html: '<sl-course></sl-course>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

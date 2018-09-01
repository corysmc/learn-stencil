import { TestWindow } from '@stencil/core/testing';
import { Courses } from './courses';

describe('courses', () => {
  it('should build', () => {
    expect(new Courses()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCoursesElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Courses],
        html: '<sl-courses></sl-courses>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});

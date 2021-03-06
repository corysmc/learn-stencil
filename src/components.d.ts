/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface SlLearningCenter {}
  interface SlLearningCenterAttributes extends StencilHTMLAttributes {}

  interface SlCourse {
    'courseSlug': string;
  }
  interface SlCourseAttributes extends StencilHTMLAttributes {
    'courseSlug'?: string;
  }

  interface SlCourses {}
  interface SlCoursesAttributes extends StencilHTMLAttributes {}

  interface SlWelcome {}
  interface SlWelcomeAttributes extends StencilHTMLAttributes {}

  interface SlSignIn {}
  interface SlSignInAttributes extends StencilHTMLAttributes {}

  interface SlApp {}
  interface SlAppAttributes extends StencilHTMLAttributes {}

  interface SlStorefront {}
  interface SlStorefrontAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SlLearningCenter': Components.SlLearningCenter;
    'SlCourse': Components.SlCourse;
    'SlCourses': Components.SlCourses;
    'SlWelcome': Components.SlWelcome;
    'SlSignIn': Components.SlSignIn;
    'SlApp': Components.SlApp;
    'SlStorefront': Components.SlStorefront;
  }

  interface StencilIntrinsicElements {
    'sl-learning-center': Components.SlLearningCenterAttributes;
    'sl-course': Components.SlCourseAttributes;
    'sl-courses': Components.SlCoursesAttributes;
    'sl-welcome': Components.SlWelcomeAttributes;
    'sl-sign-in': Components.SlSignInAttributes;
    'sl-app': Components.SlAppAttributes;
    'sl-storefront': Components.SlStorefrontAttributes;
  }


  interface HTMLSlLearningCenterElement extends Components.SlLearningCenter, HTMLStencilElement {}
  var HTMLSlLearningCenterElement: {
    prototype: HTMLSlLearningCenterElement;
    new (): HTMLSlLearningCenterElement;
  };

  interface HTMLSlCourseElement extends Components.SlCourse, HTMLStencilElement {}
  var HTMLSlCourseElement: {
    prototype: HTMLSlCourseElement;
    new (): HTMLSlCourseElement;
  };

  interface HTMLSlCoursesElement extends Components.SlCourses, HTMLStencilElement {}
  var HTMLSlCoursesElement: {
    prototype: HTMLSlCoursesElement;
    new (): HTMLSlCoursesElement;
  };

  interface HTMLSlWelcomeElement extends Components.SlWelcome, HTMLStencilElement {}
  var HTMLSlWelcomeElement: {
    prototype: HTMLSlWelcomeElement;
    new (): HTMLSlWelcomeElement;
  };

  interface HTMLSlSignInElement extends Components.SlSignIn, HTMLStencilElement {}
  var HTMLSlSignInElement: {
    prototype: HTMLSlSignInElement;
    new (): HTMLSlSignInElement;
  };

  interface HTMLSlAppElement extends Components.SlApp, HTMLStencilElement {}
  var HTMLSlAppElement: {
    prototype: HTMLSlAppElement;
    new (): HTMLSlAppElement;
  };

  interface HTMLSlStorefrontElement extends Components.SlStorefront, HTMLStencilElement {}
  var HTMLSlStorefrontElement: {
    prototype: HTMLSlStorefrontElement;
    new (): HTMLSlStorefrontElement;
  };

  interface HTMLElementTagNameMap {
    'sl-learning-center': HTMLSlLearningCenterElement
    'sl-course': HTMLSlCourseElement
    'sl-courses': HTMLSlCoursesElement
    'sl-welcome': HTMLSlWelcomeElement
    'sl-sign-in': HTMLSlSignInElement
    'sl-app': HTMLSlAppElement
    'sl-storefront': HTMLSlStorefrontElement
  }

  interface ElementTagNameMap {
    'sl-learning-center': HTMLSlLearningCenterElement;
    'sl-course': HTMLSlCourseElement;
    'sl-courses': HTMLSlCoursesElement;
    'sl-welcome': HTMLSlWelcomeElement;
    'sl-sign-in': HTMLSlSignInElement;
    'sl-app': HTMLSlAppElement;
    'sl-storefront': HTMLSlStorefrontElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

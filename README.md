# HcAngularAdvanced

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# DI (folder: di)

To read: https://www.softwarearchitekt.at/post/2018/05/06/the-new-treeshakable-providers-api-in-angular-why-how-and-cycles.aspx

We will explain how we do a simple injection of a service, how do we perform an injection of service using an abstract class and how do we perform an injection of
service using InjectionToken. The DemoComponent help only to display fake info of all injected service

# Content projection with ng-content (folder: content-projection)

To show: https://stackblitz.io/github/AngularBootCamp/content-projection

We will have to refactor a simple card component to reproduce the card structure using ng-content.
You will get some css issues but it is OK. We will not focus on it. We should only be able to see the data
and the element correctly positioned

# Custom Attribute Directive (folder: custom-directive)

* Create a custom directive appHidden that will hide the element
* Create a custom directive appClassSetter that will bind the "detail" class in the element
* Create a custom directive appClick that will listen the click event in the element
* Create a custom directive appConfigurationAriaRole that will receive in Input the role value that will be bind into the aria role attribute
  (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role). By default, it will be set to 'link'
  Directive usage should be for example: <span appConfigurationAriaRole="button">I AM</span>

# Dynamic component (folder: dynamic-component)

To show: componentFactoryResolver, ngTemplateOutlet and ngComponentOutlet

Open the demo.component.ts and implement all Todos

# Custom Structural Directive (folder: custom-directive)

To read: https://juristr.com/blog/2018/02/angular-permission-directive/

* Create a custom directive appHasPermission that will remove/add the element based on a set of permission

# Custom value accessor (folder: controlValueAccessor)

A ControlValueAccessor acts as a bridge between the Angular forms API and a native element in the DOM.

* Refactor the date-picker component using control value accessor (have to work with formControl)


# Render Props (folder: renderProps)

To read: https://blog.angularindepth.com/use-ng-template-c72852c37fba

* Create a render props to fetch Github API and render it
* Create a render props wrapper to HttpClient GET
* Rewrite GithubUser using HttpClientGet

# DataProvider Pattern  (folder: data-provider-pattern)

```html
<app-data-provider key="theme" [data]="{ theme: 'dark' }">
  ...
    ...
      <app-data-consumer key="theme">
        <ng-template let-theme="theme">
          {{theme}} <-- 'dark'
        </ng-template>
      </app-data-consumer>
    ...
  ...
</app-data-provider>

```
Inspired by the repo of isaacplmann/ngx-data-provider

# Compound component (folder: compound component): 

This is where multiple components work together to give the parent component more control over how the whole system works.
To show and explain how we move from this ( https://medium.com/@isaacplmann/build-a-toggle-component-6e8f44889c2c) to that (https://medium.com/@isaacplmann/write-compound-components-1001449c67f0)

- Refactor the Chat component using the compound pattern. So we will have as components:
  - Chat
  - ChatMessages
  - ChatInput
  - ChatButton
- Duplicate now ChatMessages, ChatInput, ChatButton, you will see that no update is perform. Fix it
  To watch : https://egghead.io/lessons/angular-communicate-between-components-using-angular-dependency-injection
- When finished, wrap your ChatMessages, ChatInput, ChatButton, you will see that your chat is not working anymore.
  Try to fix it using DI
  Could Demo also: https://stackblitz.com/edit/adv-ng-patterns-03a-compound-comp-inject-parent-5qwatj
  https://egghead.io/lessons/angular-refactor-angular-component-state-logic-into-directives
  


# NgRx

* NgRx Effects
* Refactor effect component http handling into effect
* Ngrx custom selectors (StatusState)
* Ngrx functional selector
* Ngrx using Nx DataPersistence

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

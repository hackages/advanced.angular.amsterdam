import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Exercices to start: </h2>
    <ul>
      <li>
        <h3><a routerLink="/di">DI: the new Treeshakable Providers API</a></h3>
      </li>
      <li>
        <h3><a routerLink="/content-projection">Content projection with ng-content</a></h3>
      </li>
      <li>
        <h3><a routerLink="/custom-attribute-directive">Custom Attribute directives</a></h3>
      </li>
      <li>
        <h3><a routerLink="/dynamic-component">Dynamic Component</a></h3>
      </li>

      <li>
        <h3><a routerLink="/custom-structural-directive">Custom Structural directives</a></h3>
      </li>

      <li>
        <h3><a routerLink="/control-value-accessor">Control Value Accessor</a></h3>
      </li>

      <li>
        <h3><a routerLink="/render-props">Render Props</a></h3>
      </li>
      <li>
        <h3><a routerLink="/data-provider-pattern">Data Provider Pattern</a></h3>
      </li>
      <li>
        <h3><a routerLink="/compound-component">Compound Component</a></h3>
      </li>
    </ul>
  `,
})
export class HomeComponent {
}

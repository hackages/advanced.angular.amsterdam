import {HomeComponent} from './home.component';

export const App_ROUTES = [
  { path: 'di', loadChildren: './di/di.module#DiModule', pathMatch: 'full' },
  {
    path: 'content-projection',
    loadChildren:
      './content-projection/content-projection.module#ContentProjectionModule',
    pathMatch: 'full'
  },
  {
    path: 'custom-attribute-directive',
    loadChildren:
      './custom-attribute-directive/custom-attribute-directive.module#CustomAttributeDirectiveModule',
    pathMatch: 'full'
  },
  {
    path: 'dynamic-component',
    loadChildren:
      './dynamic-component/dynamic-component.module#DynamicComponentModule',
    pathMatch: 'full'
  },
  {
    path: 'custom-structural-directive',
    loadChildren:
      './custom-structural-directive/custom-structural-directive.module#CustomStructuralDirectiveModule',
    pathMatch: 'full'
  },
  {
    path: 'control-value-accessor',
    loadChildren:
      './control-value-accessor/control-value-accessor.module#ControlValueAccessorModule',
    pathMatch: 'full'
  },
  {
    path: 'render-props',
    loadChildren: './render-props/render-props.module#RenderPropsModule',
    pathMatch: 'full'
  },
  {
    path: 'data-provider-pattern',
    loadChildren: './data-provider-pattern/data-provider-pattern.module#DataProviderPatternModule',
    pathMatch: 'full'
  },
  {
    path: 'compound-component',
    loadChildren:
      './compound-component/compound-component.module#CompoundComponentModule',
    pathMatch: 'full'
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@gpi/admin/feature/shell').then((m) => m.AdminFeatureShellModule),
  },
];
const config: ExtraOptions = {
  initialNavigation: true,
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class TemplateRoutingModule { }

import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';
import { ThemeOneCompOneComponent } from './components/theme-one/theme-one-comp-one/theme-one-comp-one.component';
import { NgModule } from '@angular/core';
import { ThemeOneCompTwoComponent } from './components/theme-one/theme-one-comp-two/theme-one-comp-two.component';
import { Routes, RouterModule } from '@angular/router';
import { ThemeTwoCompOneComponent } from './components/theme-two/theme-two-comp-one/theme-two-comp-one.component';
import { ThemeTwoCompTwoComponent } from './components/theme-two/theme-two-comp-two/theme-two-comp-two.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'theme-one',
        pathMatch: 'full'
    },
    {
        path: 'theme-one',
        loadChildren: './modules/theme-one/theme-one.module#ThemeOneModule'
    },
    {
        path: 'theme-two',
        loadChildren: './modules/theme-two/theme-two.module#ThemeTwoModule'
    },
    {
        path: '**',
        component: InvalidRouteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

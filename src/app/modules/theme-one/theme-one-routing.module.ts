import { ThemeOneComponent } from '../../components/containers/theme-one/theme-one.component';
import { Routes, RouterModule } from '@angular/router';
import { ThemeOneCompOneComponent } from '../../components/theme-one/theme-one-comp-one/theme-one-comp-one.component';
import { ThemeOneCompTwoComponent } from '../../components/theme-one/theme-one-comp-two/theme-one-comp-two.component';
import { InvalidRouteComponent } from '../../components/invalid-route/invalid-route.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: ThemeOneComponent,
        children: [
            {
                path: 'one',
                component: ThemeOneCompOneComponent
            },
            {
                path: 'two',
                component: ThemeOneCompTwoComponent
            },
            {
                path: '**',
                component: InvalidRouteComponent
            }
        ]
    },
    {
        path: '**',
        component: InvalidRouteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeOneRoutingModule { }

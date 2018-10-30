import { Routes, RouterModule } from '@angular/router';
import { ThemeTwoCompOneComponent } from '../../components/theme-two/theme-two-comp-one/theme-two-comp-one.component';
import { ThemeTwoCompTwoComponent } from '../../components/theme-two/theme-two-comp-two/theme-two-comp-two.component';
import { InvalidRouteComponent } from '../../components/invalid-route/invalid-route.component';
import { NgModule } from '@angular/core';
import { ThemeTwoComponent } from '../../components/containers/theme-two/theme-two.component';

const routes: Routes = [
    {
        path: '',
        component: ThemeTwoComponent,
        children: [
            {
                path: 'one',
                component: ThemeTwoCompOneComponent
            },
            {
                path: 'two',
                component: ThemeTwoCompTwoComponent
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
export class ThemeTwoRoutingModule { }

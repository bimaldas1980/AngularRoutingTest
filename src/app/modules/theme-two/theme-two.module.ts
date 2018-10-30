import { ThemeTwoRoutingModule } from './theme-two-routing.module';
import { ThemeTwoCompOneComponent } from '../../components/theme-two/theme-two-comp-one/theme-two-comp-one.component';
import { ThemeTwoCompTwoComponent } from '../../components/theme-two/theme-two-comp-two/theme-two-comp-two.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InvalidRouteComponent } from '../../components/invalid-route/invalid-route.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeTwoComponent } from '../../components/containers/theme-two/theme-two.component';


@NgModule({
    declarations: [
      ThemeTwoCompOneComponent,
      ThemeTwoCompTwoComponent,
      ThemeTwoComponent
    ],
    imports: [
        SharedModule,
        ThemeTwoRoutingModule
    ],
    exports: [
      RouterModule
    ],
    providers: []
  })
  export class ThemeTwoModule { }

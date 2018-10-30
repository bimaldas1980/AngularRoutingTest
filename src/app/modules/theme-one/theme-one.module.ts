import { ThemeOneCompOneComponent } from '../../components/theme-one/theme-one-comp-one/theme-one-comp-one.component';
import { ThemeOneCompTwoComponent } from '../../components/theme-one/theme-one-comp-two/theme-one-comp-two.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ThemeOneRoutingModule } from './theme-one-routing.module';
import { InvalidRouteComponent } from '../../components/invalid-route/invalid-route.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeOneComponent } from '../../components/containers/theme-one/theme-one.component';

@NgModule({
    declarations: [
      ThemeOneCompOneComponent,
      ThemeOneCompTwoComponent,
      ThemeOneComponent
    ],
    imports: [
        SharedModule,
        ThemeOneRoutingModule
    ],
    exports: [
      RouterModule
    ],
    providers: []
  })
  export class ThemeOneModule { }

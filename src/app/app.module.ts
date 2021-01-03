import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './solidus/dashboard.component';
import {EventComponent} from './event/event.component';
import {PlayerComponent} from './player/player.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatFormFieldModule, MatSelectModule, MatSortModule, MatTableModule} from '@angular/material';
import {TableComponent} from './table/table.component';
import {OmniBarComponent} from './table/omni-bar/omni-bar.component';
import {ChartComponent} from './chart/chart.component';
import {ChartsModule} from 'ng2-charts';
import { ToggleDataDisplayComponent } from './solidus/toggle-data-display/toggle-data-display.component';
import { TopBarComponent } from './solidus/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventComponent,
    PlayerComponent,
    TableComponent,
    OmniBarComponent,
    ChartComponent,
    ToggleDataDisplayComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridModule } from '@angular/flex-layout';
import { from, pipe } from 'rxjs';
import { SortPipe } from './shared/pipes/sort.pipe';
import { PicsumComponent } from './picsum/picsum.component';
import { PicsumService } from './services/picsum.service';
// import { PaginationDirective } from './directives/pagination.directive';
import { MaterialModule } from './material.module';
// import { SEARCHComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './Pipes/filter.pipe';


const Material = [
  MatToolbarModule,
  MatIconModule,
  FormsModule,
]

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    PicsumComponent,
    PicsumComponent,
    // PaginationDirective,
    // SEARCHComponent,
    FilterComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    FlexModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    GridModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCheckboxModule}  from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatMenuModule, MatInputModule, MatRadioModule, MatCardModule, MatProgressBarModule} from '@angular/material';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { AddItemComponent } from './add-item/add-item.component';
import { BasketComponent } from './basket/basket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemListComponent,
    AddItemComponent,
    BasketComponent,
    LoginComponent,
    RegisterComponent,
    ManageAccountComponent,
    ModelViewerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

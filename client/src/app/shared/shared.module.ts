import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SearchComponent
  ]
})
export class SharedModule { }

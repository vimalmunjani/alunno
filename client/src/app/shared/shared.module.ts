import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SearchComponent, UnderConstructionComponent } from './components';


@NgModule({
  declarations: [SearchComponent, UnderConstructionComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SearchComponent,
    UnderConstructionComponent
  ]
})
export class SharedModule { }

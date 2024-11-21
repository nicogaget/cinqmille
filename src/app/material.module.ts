import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

const MATERIALS = [
  MatButtonModule, MatFormFieldModule, MatInputModule,
  MatTableModule, MatGridListModule
]

@NgModule({
  imports: MATERIALS,
  exports: MATERIALS

})
export class MaterialModule {
}

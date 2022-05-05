import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";

const modules=[
    MatFormFieldModule,
    MatIconModule
];
@NgModule({
    imports:modules,
    exports:modules
})

export class MaterialModule{

}
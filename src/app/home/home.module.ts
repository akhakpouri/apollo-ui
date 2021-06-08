import { MaterialModule } from './../../modules/matrial.module';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule
    ]
})

export class HomeModule { }

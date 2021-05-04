import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleComponent } from './my-module.component';
import { MatCardModule } from '@angular/material/card';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        TableModule,
        PaginatorModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [MyModuleComponent],
    exports: [MyModuleComponent]
})
export class MyModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { ExtraComponentsRoutes } from './extra-component.routing';


import { ToastrComponent } from './toastr/toastr.component';
import { EditorComponent } from './editor/editor.component';
import { DragComponent } from './drag-n-drop/drag.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ExtraComponentsRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        DragDropModule
    ],

    declarations: [
        ToastrComponent,
        EditorComponent,
        DragComponent
    ]
})
export class ExtraComponentModule { }

import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private spinner:NgxSpinnerService){}
    title = 'app';
    changeOfRoutes(){
       setTimeout(() => {
        this.spinner.hide()
        console.log('Route changed');
       }, 130); 
    }
}
 
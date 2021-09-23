import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.css']
})
export class SpeechRecognitionComponent implements OnInit {
  constructor(private spinner:NgxSpinnerService){}
  changeOfRoutes(){
     setTimeout(() => {
      this.spinner.hide()
     },130); 
  }

  ngOnInit(): void {
  }

}

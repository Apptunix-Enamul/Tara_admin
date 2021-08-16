import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeechRecognitionRoutingModule } from './speech-recognition-routing.module';
import { SpeechRecognitionComponent } from './speech-recognition.component';
import { SpeechlistComponent } from './speechlist/speechlist.component';
import { SpeecheditComponent } from './speechedit/speechedit.component';
import { SpeechaddComponent } from './speechadd/speechadd.component';


@NgModule({
  declarations: [SpeechlistComponent, SpeecheditComponent, SpeechaddComponent, SpeechRecognitionComponent],
  imports: [
    CommonModule,
    SpeechRecognitionRoutingModule
  ]
})
export class SpeechRecognitionModule { }

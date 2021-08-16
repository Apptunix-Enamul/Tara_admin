import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechRecognitionComponent } from './speech-recognition.component';
import { SpeechaddComponent } from './speechadd/speechadd.component';
import { SpeecheditComponent } from './speechedit/speechedit.component';
import { SpeechlistComponent } from './speechlist/speechlist.component';

const routes: Routes = [
  {
    path: "",
    component: SpeechRecognitionComponent,
    children: [
      {
        path: "",
        component: SpeechlistComponent,
        data: {
          title: 'Speech List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Speech' }
          ]
        }
      },
      {
        path: "add",
        component: SpeechaddComponent,
        data: {
          title: 'Add Speech',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Speech' }
          ]
        }
      },
      {
        path: "edit",
        component: SpeecheditComponent,
        data: {
          title: 'Edit Speech',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Speech' }
          ]
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeechRecognitionRoutingModule { }

import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular4-firebase';
}

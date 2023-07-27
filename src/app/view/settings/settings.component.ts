import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  toggleTheme(event: any){
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');

    }else{

      document.body.setAttribute('color-theme', 'light');
    }

  }

}

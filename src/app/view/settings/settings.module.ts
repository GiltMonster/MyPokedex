import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SettingsComponent } from './settings.component';



@NgModule({
  exports:[SettingsComponent],
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class SettingsModule { }

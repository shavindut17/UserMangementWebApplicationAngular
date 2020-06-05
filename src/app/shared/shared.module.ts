import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ImageUploadComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports : [ImageUploadComponent]
})
export class SharedModule { }

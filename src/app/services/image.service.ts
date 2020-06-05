import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export const imageUrl = environment.apiURL + '/images';

@Injectable({
  providedIn: 'root'
})

export class ImageService extends CrudService {

  constructor(protected http: HttpClient) {
    super(http , imageUrl);
  }

  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(imageUrl, formData);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// import { DatePipe } from '@angular/common';
import {  } from "@shared/pipes/image.pipe";

@Pipe({name: 'imageValidation'})
export class ImageValidationPipe implements PipeTransform {
  defaultImage = '/../../../../assets/img/cs-sofaherz-dunkel.png';
  constructor(private http: HttpClient){

  }
    transform(url: string): any {
      return this.http.get(url)
        .pipe(
          map( res => {
            console.log('image found');
            return url;
          }),
          catchError(err => {
                console.log('image not found');
                return this.defaultImage;})
        )

    }
}

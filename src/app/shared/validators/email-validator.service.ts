import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;
    const httpCallObservable = new Observable<ValidationErrors|null>( (subscriber) => {

      console.log({ email });

      if ( email === 'fernando@google.com' ) {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
        // return;
      }

      subscriber.next(null);
      subscriber.complete();


    }).pipe(
      delay( 3000 )
    );

    return httpCallObservable;

}

  /* // Documentación para entender el funcionamieno de los validadores asíncronos.
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);

    return of({
      emailTaken: true
    }).pipe(delay(2000))
  }
  */


  // Este es un ejemplo de referencia para que veas un ejemplo de como usariamos la validación asíncrona,   llamando desde un backend la respuesta GET http, sobre si existe o ono un correo.
  /*
  return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`).
  pipe(
    map( resp => {
      return ( resp.length === 0 )? null : { emailTaken: true }
  })
);
*/


}





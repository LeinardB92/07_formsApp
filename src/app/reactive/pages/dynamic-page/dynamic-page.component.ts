import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  // Esta es otra manera de crear la estructura del formulario, sin el uso de FormBuilder
  // public myForm2: FormControl = new FormGroup({
  // name: new FormControl('', [], []),
  //   favoriteGames: new FormArray([])
  // });

  // Estructura del form con FormBuilder
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required ],
      ['Death Stranding', Validators.required ],
    ])
  });

  public newFavorite: FormControl = new FormControl('', Validators.required );

  constructor(private fb: FormBuilder){}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavorites():void {
    if ( this.newFavorite.invalid ) return;
    const newGame = this.newFavorite.value;

    // this.favoriteGames.push(  new FormControl( newGame, Validators.required ) );
    this.favoriteGames.push(
      this.fb.control( newGame, Validators.required )
    );

    this.newFavorite.reset();
  }

  onDeleteFavorite( index:number ):void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit():void {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray ) = this.fb.array([]);
    this.myForm.reset();
  }
}

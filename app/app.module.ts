import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { HttpModule }       from '@angular/http';

import { MaterialModule }   from '@angular/material';

import { MyComponent }      from './scripts/my.component';

@NgModule({
    imports:        [ BrowserModule, FormsModule, RouterModule, HttpModule, MaterialModule.forRoot() ],
    declarations:   [ MyComponent ],
    bootstrap:      [ MyComponent ]
})
export class AppModule { }
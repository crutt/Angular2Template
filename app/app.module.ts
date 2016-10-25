import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';
import { HttpModule }       from '@angular/http';

import { MyComponent }      from './scripts/my.component';

@NgModule({
    imports:        [ BrowserModule, FormsModule, RouterModule, HttpModule ],
    declarations:   [ MyComponent ],
    bootstrap:      [ MyComponent ]
})
export class AppModule { }
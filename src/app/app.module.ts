import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {ShortenPipe} from "./shorten.pipe";
import {FilterPipe} from "./filter.pipe";


@NgModule({
    declarations: [
        AppComponent,
        ShortenPipe,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}

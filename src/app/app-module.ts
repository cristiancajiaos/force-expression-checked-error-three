import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Layout } from './layout/layout';
import { Foo } from './components/foo/foo';
import { Bar } from './components/bar/bar';
import { Baz } from './components/baz/baz';
import {provideHttpClient, withFetch} from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Layout,
    Foo,
    Bar,
    Baz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }

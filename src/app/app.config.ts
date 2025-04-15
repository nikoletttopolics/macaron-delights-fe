import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { macaronReducer } from './state/app.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { MacaronEffects } from './state/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({
      macaron: macaronReducer,
    }),
    provideEffects([MacaronEffects]),
    provideRouter(routes, withComponentInputBinding()),

    provideHttpClient(),
  ],
};

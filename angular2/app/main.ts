/**
 * This is an important step. You must bootstrap the application in order for Angular to work.
 * Every application will have a file like this. Dig into the options available for bootstrapping
 * on the Angular2 website.
 */
import { bootstrap } 	from '@angular/platform-browser-dynamic';
import { AppComponent}	from './app.component';

bootstrap(AppComponent);
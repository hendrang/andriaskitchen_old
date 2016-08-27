import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService } from './shared';

import '../style/app.scss';
import '../style/vendor/bootstrap.css';
import '../style/vendor/font-awesome.css';
import '../style/vendor/flexslider.css';
import '../style/vendor/testimonials-slider.css';
import '../style/vendor/templatemo_style.css';
import '../style/vendor/templatemo_misc.css';
import '../js/vendor/bootstrap.js';
import '../js/vendor/plugins.js';
import '../js/main.js';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
     api.getMenu();
  }
}

// launch.json - for debugging
// http://stackoverflow.com/questions/34030249/visual-studio-code-chrome-debugger-extension-webkit-debug-adapter-got-respon
// {
// "version": "0.2.0",
// "configurations": [
//     {
//         "name": "Launch",
//         "type": "chrome",
//         "request": "launch",
//         "url": "http://localhost:9000/",//Change to whatever you homepage is
//         "runtimeArgs": [
//             "--new-window", //Open in new window
//             "--user-data-dir=C:/dev/", //Can be any directory. New instance in that directory
//             "--remote-debugging-port=9222" //Open in port 9222 (standard chrome debug port)
//         ],
//         "webRoot": "src/app/", //The directory that contains js, ts and map files
//         "sourceMaps": true
//     }
//   ]
// }

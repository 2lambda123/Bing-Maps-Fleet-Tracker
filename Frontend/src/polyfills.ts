// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Microsoft Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/features/symbol';
import 'core-js/features/object';
import 'core-js/features/function';
import 'core-js/features/parse-int';
import 'core-js/features/parse-float';
import 'core-js/features/number';
import 'core-js/features/math';
import 'core-js/features/string';
import 'core-js/features/date';
import 'core-js/features/array';
import 'core-js/features/regexp';
import 'core-js/features/map';
import 'core-js/features/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/** Evergreen browsers require these. **/




/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.


/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Microsoft Edge, IE11 and Safari 10
 */
// 


/***************************************************************************************************
 * Fix for the error "global is not defined" appears while starting the Frontend
 */
(window as any).global = window;
var global = global || window;

// // (window as any).process = {
//     env: { DEBUG: undefined },
//   };
import * as process from 'process';
window['process'] = process;

global.Buffer = global.Buffer || require('buffer').Buffer;

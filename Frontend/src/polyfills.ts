// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * This file includes polyfills and is loaded before the main application to provide browser compatibility for Angular.
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
 * // SECTION B: Browser polyfills required for compatibility with various browsers, including IE9, IE10, IE11, and Evergreen browsers.
 */

/** IE9, IE10 and IE11 requires all of the following polyfills. **/

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js';  // Run `npm install --save classlist.js'.
import 'core-js/es7/array';
/** IE10 and IE11 requires the following to support `@angular/animation`. */

import 'core-js/es7/reflect';

/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.


/***************************************************************************************************
 * // SECTION C: Zone JS is required by Angular to provide zone support for asynchronous operations.
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







global.Buffer = global.Buffer || require('buffer').Buffer;

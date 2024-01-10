// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SpinnerService {

  spinning = false;

  constructor() { }

  start() {
    this.spinning = true;
  }

  stop() {
    this.spinning = false; // Set the spinner to stopped state
  }
}

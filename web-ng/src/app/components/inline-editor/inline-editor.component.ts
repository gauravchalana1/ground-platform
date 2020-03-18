/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'inline-editor',
  templateUrl: './inline-editor.component.html',
  styleUrls: ['./inline-editor.component.css'],

})
export class InlineEditorComponent {
  @Input() data: string = '';
  @Input() placeholder: string = '';
  @Output() focusOut: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {
  }


  onFocusOut(event: { target: HTMLInputElement }) {
    this.focusOut.emit(event.target.value);
  }

  handleKeyPress(event: { key: string; target: HTMLInputElement }) {
    switch (event.key) {
      case 'Enter':
        event.target.blur();
        break;
      case 'Escape':
        event.target.value = this.data;
        event.target.blur();
        break;
      default:
      // n/a.
    }
  }
}

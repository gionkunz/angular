/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ParseError, ParseErrorLevel, ParseSourceSpan} from '../parse_util';

/**
 * An i18n error.
 */
export class I18nError extends ParseError {
  constructor(span: ParseSourceSpan, msg: string) { super(span, msg); }
}

export class I18nWarning extends ParseError {
  constructor(span: ParseSourceSpan, msg: string) { super(span, msg, ParseErrorLevel.WARNING); }
}

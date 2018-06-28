// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const test = require('ava');
const { default: remcalc } = require('../');

test('with multiple num arguments', t => {
  t.deepEqual(remcalc(1, 2, 3, 4), '0.0625rem 0.125rem 0.1875rem 0.25rem');
  t.deepEqual(remcalc.withBase(10, 1, 2, 3, 4), '0.1rem 0.2rem 0.3rem 0.4rem');
});

test('with single str argument', t => {
  t.deepEqual(remcalc('1'), '0.0625rem');
  t.deepEqual(remcalc('1px'), '0.0625rem');
  t.deepEqual(remcalc.withBase(10, '1px'), '0.1rem');
});

test('with multiple str arguments', t => {
  t.deepEqual(
    remcalc('1', '2', '3', '4'),
    '0.0625rem 0.125rem 0.1875rem 0.25rem'
  );

  t.deepEqual(
    remcalc('1px', '2px', '3px', '4px'),
    '0.0625rem 0.125rem 0.1875rem 0.25rem'
  );

  t.deepEqual(
    remcalc.withBase(10, '1', '2', '3', '4'),
    '0.1rem 0.2rem 0.3rem 0.4rem'
  );

  t.deepEqual(
    remcalc.withBase(10, '1px', '2px', '3px', '4px'),
    '0.1rem 0.2rem 0.3rem 0.4rem'
  );
});

test('with single str argument spaced', t => {
  t.deepEqual(remcalc('1 2 3 4'), '0.0625rem 0.125rem 0.1875rem 0.25rem');
  t.deepEqual(remcalc.withBase(10, '1 2 3 4'), '0.1rem 0.2rem 0.3rem 0.4rem');
});

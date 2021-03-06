// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '../testingPairs';

const keyring = testingPairs();

describe('decode', () => {
  it('fails when no data provided', () => {
    expect(
      () => keyring.alice.decodePkcs8()
    ).toThrow(/No encrypted data available/);
  });

  it('returns correct publicKey from encoded', () => {
    expect(
      () => keyring.alice.decodePkcs8(
        'testing', keyring.alice.encodePkcs8('testing')
      )
    ).not.toThrow();
  });
});

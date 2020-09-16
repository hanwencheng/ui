// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useMemo } from 'react';

import { createSignPayload } from './util';
import QrDisplay from './Display';

interface Props {
  address: string;
  className?: string;
  cmd: number;
  genesisHash: Uint8Array | string;
  payload: Uint8Array;
  size?: string | number;
  specVersion: number;
  style?: React.CSSProperties;
}

function DisplayPayload ({ address, className, cmd, genesisHash, payload, size, specVersion, style }: Props): React.ReactElement<Props> | null {
  const data = useMemo(
    () => createSignPayload(address, cmd, payload, genesisHash, specVersion),
    [address, cmd, payload, genesisHash, specVersion]
  );

  if (!data) {
    return null;
  }

  return (
    <QrDisplay
      className={className}
      size={size}
      style={style}
      value={data}
    />
  );
}

export default React.memo(DisplayPayload);

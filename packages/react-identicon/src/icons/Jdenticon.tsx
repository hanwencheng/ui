// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Props } from '../types';

import React from 'react';
import jdenticon from 'jdenticon';

export default class Jdenticon extends React.PureComponent<Props> {
  public render (): React.ReactNode {
    const { className, publicKey, size, style } = this.props;

    return (
      <div
        className={`container ${className}`}
        dangerouslySetInnerHTML={{
          __html: jdenticon.toSvg(publicKey.substr(2), size)
        }}
        style={style}
      />
    );
  }
}

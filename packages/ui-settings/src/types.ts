// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type Option = {
  disabled?: boolean;
  info: string;
  text: string;
  value: string | number;
}

export interface SettingsStruct {
  apiUrl: string;
  camera: string;
  i18nLang: string;
  icon: string;
  ledgerConn: string;
  locking: string;
  prefix: number;
  uiMode: string;
  uiTheme: string;
}

export interface NetworkSpecsStruct {
  color: string;
  decimals: number;
  genesisHash: string;
  prefix: number;
  title: string;
  unit: string;
}

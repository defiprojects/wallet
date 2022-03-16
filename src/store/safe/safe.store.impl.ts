import { action, makeObservable, observable } from 'mobx';
import { SafeStore } from './safe.store';
import { StoreImpl } from '../store/store.impl';
import { Types } from '@safient/core';
import { WalletSecret, WalletInfo } from '../../utils/Wallet'


export class SafeStoreImpl extends StoreImpl implements SafeStore {


  _safe?: Types.Safe;
  _walletSecret?: WalletSecret;
  _walletInfo?: WalletInfo;


  constructor() {
    super();

    makeObservable<SafeStoreImpl, any>(this, {
      _safe: observable,
      _walletInfo: observable,
      _walletSecret: observable,
      setWallet: action,
    });
  }

  get safe(): Types.Safe|undefined {
    return this._safe;
  }

  get walletInfo(): WalletInfo|undefined {
    return this._walletInfo;
  }

  get walletSecret(): WalletSecret|undefined {
    return this._walletSecret;
  }

  setSafe(safe: Types.Safe) {
    this._safe = safe;
 }

  setWallet(info: WalletInfo, secret?: WalletSecret) {

    this._walletInfo = info;
    this._walletSecret = secret;
    
   }

   async resetStore() {
  }

}
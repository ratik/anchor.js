import { AddressProvider } from "./provider";

export interface AddressMap {
  bLunaHub: string;
  blunaToken: string;
  blunaReward: string;
  blunaAirdrop: string;
  mmInterestModel: string;
  mmOracle: string;
  mmMarket: string;
  mmOverseer: string;
  mmCustody: string;
  mmLiquidation: string;
  mmDistributionModel: string;
  terraswapFactory: string;
  aTerra: string;
  terraswapblunaLunaPair: string;
  terraswapblunaLunaLPToken: string;
  terraswapAncUstPair: string;
  terraswapAncUstLPToken: string;
  gov: string;
  distributor: string;
  collector: string;
  community: string;
  staking: string;
  ANC: string;
  airdrop: string;
  vesting: string;
  team: string;
}

export type AllowedAddressKeys = keyof AddressMap

export class AddressProviderFromJson implements AddressProvider {
  constructor(private data: AddressMap) {}

  blunaReward(): string {
    return this.data.blunaReward;
  }

  blunaHub(): string {
    return this.data.bLunaHub;
  }

  blunaToken(): string {
    return this.data.blunaToken;
  }

  market(): string {
    return this.data.mmMarket;
  }

  custody(): string {
    return this.data.mmCustody;
  }

  overseer(): string {
    return this.data.mmOverseer;
  }

  aTerra(): string {
    return this.data.aTerra;
  }

  oracle(): string {
    return this.data.mmOracle;
  }

  interest(): string {
    return this.data.mmInterestModel;
  }

  liquidation(): string {
    return this.data.mmLiquidation;
  }

  terraswapFactory(): string {
    return this.data.terraswapFactory;
  }

  terraswapblunaLunaPair(): string {
    return this.data.terraswapblunaLunaPair;
  }

  terraswapblunaLunaLPToken(): string {
    return this.data.terraswapblunaLunaLPToken;
  }

  gov(): string {
    return this.data.gov;
  }

  terraswapAncUstPair(): string {
    return this.data.terraswapAncUstPair;
  }

  terraswapAncUstLPToken(): string {
    return this.data.terraswapAncUstLPToken;
  }

  collector(): string {
    return this.data.collector;
  }

  staking(): string {
    return this.data.staking;
  }

  community(): string {
    return this.data.community;
  }

  distributor(): string {
    return this.data.distributor;
  }

  ANC(): string {
    return this.data.ANC;
  }

  airdrop(): string {
    return this.data.airdrop;
  }

  investorLock(): string {
    return this.data.vesting;
  }

  teamLock(): string {
    return this.data.team;
  }
}

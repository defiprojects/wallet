import { Box, Text } from 'components/primitive';
import styled from 'styled-components';

export const BalanceContainer = styled(Box)`
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-end;
  /* add props support */
  filter: blur(4px);
`;

export const BalanceInUsd = styled(Text)`
  display: inline-flex;
`;

export const BalanceInEth = styled(Text)`
  display: inline-flex;
  marginn-top: 0.6rem;
`;

export const WalletClaimContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export const WalletClaimView = styled(Box)`
  display: inline-block;
  width: 59.6rem !important;
`;

export const AlertContainer = styled(Box)`
  transition: all 0.2s ease-in-out !important;
`;

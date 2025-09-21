import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';
import { config } from '../../config';

export const wagmiConfig = getDefaultConfig({
  appName: 'Private FHE Bonds',
  projectId: config.walletConnectProjectId,
  chains: [sepolia],
  ssr: false,
});

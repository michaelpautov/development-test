import { PropsWithChildren } from 'react'
import { createClient, WagmiConfig } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

export const WagmiProvider = ({ children }: PropsWithChildren) => (
  <WagmiConfig client={client}>{children}</WagmiConfig>
)

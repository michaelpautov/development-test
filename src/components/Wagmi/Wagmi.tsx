import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Wagmi() {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()

  const buttonClassName =
    'inline-block ml-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'

  if (isConnected) {
    return (
      <div>
        {/*@ts-ignore*/}
        {ensAvatar && <img src={ensAvatar} alt="ENS Avatar" />}
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        {/*@ts-ignore*/}
        <div>Connected to {connector?.name}</div>
        {/*@ts-ignore*/}
        <button className={buttonClassName} onClick={disconnect}>
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button
          className={buttonClassName}
          disabled={!connector?.ready}
          key={connector?.id}
          onClick={() => connect({ connector })}>
          {connector?.name}
          {!connector?.ready && ' (unsupported)'}
          {isLoading && connector?.id === pendingConnector?.id && ' (connecting)'}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}

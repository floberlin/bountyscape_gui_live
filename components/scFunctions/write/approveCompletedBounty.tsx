import { usePrepareContractWrite, useContractWrite, useNetwork } from 'wagmi'
import Bountyscape from '../../../utils/Bountyscape.json'

export function ApproveCompletedBounty() {
  const { chain } = useNetwork()
  const contractAddr = chain?.name === 'Goerli' ? '0xDFDc2E99A1De4ea9DAf44591fd4d8a1C555F8472' : '0xd821C935B8fAA376a4E7382b7EDbc0682A769310'

  const { config } = usePrepareContractWrite({
    addressOrName: contractAddr,
    contractInterface: Bountyscape.abi,
    functionName: 'approveCompletedBounty',
  })
  
  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  return (
    <div>
      <button className="btn btn-primary" onClick={() => write?.()}>Revoke Employer</button>
    </div>
  )
}
import React from 'react';
import metamask from '../img/metamaskimg.svg';
import walletconnect from '../imgwalletconnect.png';
import arrow from '../img/arrow.png'

function ConnectWallect() {
  return (
    <div>
        <h4>
            Connect Wallet
        </h4>

        <h3>
			Choose your preferred wallet:
        </h3>

		<div>
			<img src={metamask}
			alt='Meta Mask account'
			/>

            <img src={arrow}
			alt='arrow'
			/>
		</div>

		<div>
			<img src={walletconnect}
			alt='wallet Connect'
			/>

            <img src={arrow}
			alt='arrow'
			/>
		</div>

		
    </div>
  )
}

export default ConnectWallect
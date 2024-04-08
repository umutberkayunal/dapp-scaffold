import { useWallet } from '@solana/wallet-adapter-react';
import { FC, useCallback } from 'react';
import { notify } from "../utils/notifications";

export const ClaimAirdrop: FC = () => {
    const { publicKey, signMessage } = useWallet();

    const onClick = useCallback(async () => {
        try {
            // Your sign message logic
        } catch (error: any) {
            notify({ type: 'error', message: `Sign Message failed!`, description: error?.message });
            console.log('error', `Sign Message failed! ${error?.message}`);
        }
    }, [publicKey, notify, signMessage]);

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <a
                    href="https://airdrop.wormhole.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                    onClick={onClick} // You may remove this onClick event if you don't need it
                >
                    <div className="hidden group-disabled:block">
                        Wallet not connected
                    </div>
                    <span className="block group-disabled:hidden"> 
                        Claim Airdrop
                    </span>
                </a>
            </div>
        </div>
    );
};

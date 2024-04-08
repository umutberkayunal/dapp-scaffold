// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="md:hero mx-auto p-4">
{/*      <section id="home" className="relative z-10 pt-48 pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[720px] text-center">
              <h1
                className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]"
              >
                Tailwind CSS Template for Crypto, ICO and Web3
              </h1>
              <p
                className="mx-auto mb-4 max-w-[620px] text-lg font-medium text-body-color-2 dark:text-white"
              >
                Crypto Currency, Blockchain, ICO, Web3 related website template
                crafted with Tailwind CSS. Comes with all essential UI
                components and pages to launch complete website or landing page
                for anything that related to Crypto, Blockchain and Web3.
              </p>

              <div
                className="-mx-1 mb-10 flex flex-wrap items-center justify-center sm:-mx-2"
              >
                <div className="group relative mt-4 px-1 sm:px-2">
                  <span
                    className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  >
                    <svg
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5815 17.3879C25.7115 24.8885 18.1146 29.4533 10.6131 27.5829C3.11474 25.7129 -1.44998 18.1155 0.420775 10.6155C2.28989 3.11409 9.8868 -1.45098 17.386 0.418958C24.8869 2.28889 29.4514 9.8871 27.5813 17.3881L27.5814 17.3879H27.5815Z"
                        fill="#F7931A"
                      />
                      <path
                        d="M18.9713 12.0301C19.2001 10.454 18.0353 9.60675 16.4424 9.04155L16.9591 6.90652L15.6975 6.58268L15.1945 8.6615C14.8628 8.57628 14.5222 8.49599 14.1837 8.41639L14.6904 6.32384L13.4295 6L12.9125 8.13434C12.6381 8.06996 12.3685 8.00634 12.107 7.9393L12.1084 7.93259L10.3686 7.48503L10.033 8.87315C10.033 8.87315 10.969 9.09418 10.9493 9.10778C11.4602 9.23914 11.5526 9.58753 11.5372 9.86367L10.9486 12.296C10.9838 12.3052 11.0294 12.3185 11.0798 12.3393C11.0377 12.3286 10.9929 12.3168 10.9464 12.3054L10.1214 15.7127C10.059 15.8726 9.90051 16.1125 9.54333 16.0214C9.55597 16.0403 8.62637 15.7857 8.62637 15.7857L8 17.2734L9.64178 17.695C9.94721 17.7739 10.2465 17.8564 10.5413 17.9341L10.0192 20.0936L11.2794 20.4174L11.7964 18.2808C12.1406 18.3771 12.4747 18.4659 12.8018 18.5496L12.2865 20.6762L13.5482 21L14.0702 18.8445C16.2215 19.264 17.8391 19.0949 18.52 17.0903C19.0687 15.4764 18.4927 14.5455 17.3609 13.9385C18.1852 13.7426 18.8062 13.1841 18.9717 12.0303L18.9713 12.03L18.9713 12.0301ZM16.0888 16.194C15.6989 17.8079 13.0611 16.9355 12.2059 16.7167L12.8987 13.8557C13.7539 14.0757 16.4963 14.5109 16.0888 16.194H16.0888ZM16.4789 12.0068C16.1233 13.4748 13.9278 12.7289 13.2157 12.5461L13.8438 9.95132C14.556 10.1342 16.8494 10.4755 16.4791 12.0068H16.4789Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div
                    className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100"
                  >
                    <span
                      className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"
                    ></span>
                    <span>Bitcoin (BTC)</span>
                  </div>
                </div>
                <div className="group relative mt-4 px-1 sm:px-2">
                  <span
                    className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  >
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14.28" cy="14.28" r="14.28" fill="#295ADA" />
                      <g clip-path="url(#clip0_73_10326)">
                        <path
                          d="M14.4692 7L13.1848 7.73853L9.68479 9.76147L8.40039 10.5V17.5L9.68479 18.2385L13.2169 20.2615L14.5013 21L15.7857 20.2615L19.2536 18.2385L20.538 17.5V10.5L19.2536 9.76147L15.7536 7.73853L14.4692 7ZM10.9692 16.0229V11.9771L14.4692 9.95413L17.9692 11.9771V16.0229L14.4692 18.0459L10.9692 16.0229Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_73_10326">
                          <rect
                            width="12.1376"
                            height="14"
                            fill="white"
                            transform="translate(8.40039 7)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div
                    className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100"
                  >
                    <span
                      className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"
                    ></span>
                    <span>Bitcoin (BTC)</span>
                  </div>
                </div>
                <div className="group relative mt-4 px-1 sm:px-2">
                  <span
                    className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14" cy="14" r="14" fill="#24292F" />
                      <g clip-path="url(#clip0_73_10306)">
                        <path
                          d="M17.0343 8.79657L14.7432 12.2005C14.5847 12.4323 14.8894 12.7129 15.1088 12.5177L17.3633 10.5534C17.4243 10.5046 17.5096 10.5412 17.5096 10.6266V16.7635C17.5096 16.8489 17.3999 16.8855 17.3511 16.8245L10.5265 8.65017C10.3071 8.38176 9.99026 8.23535 9.63684 8.23535H9.39311C8.75939 8.23535 8.23535 8.75997 8.23535 9.40659V18.0445C8.23535 18.6911 8.75939 19.2157 9.40529 19.2157C9.80746 19.2157 10.1853 19.0083 10.4046 18.6545L12.6958 15.2506C12.8542 15.0188 12.5495 14.7382 12.3301 14.9334L10.0756 16.8855C10.0146 16.9343 9.92933 16.8977 9.92933 16.8123V10.6876C9.92933 10.6022 10.039 10.5656 10.0878 10.6266L16.9124 18.8009C17.1318 19.0693 17.4608 19.2157 17.8021 19.2157H18.0458C18.6917 19.2157 19.2157 18.6911 19.2157 18.0445V9.40659C19.2157 8.75997 18.6917 8.23535 18.0458 8.23535C17.6314 8.23535 17.2537 8.44276 17.0343 8.79657Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_73_10306">
                          <rect
                            width="10.9804"
                            height="10.9804"
                            fill="white"
                            transform="translate(8.23535 8.23535)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div
                    className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100"
                  >
                    <span
                      className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"
                    ></span>
                    <span>Bitcoin (BTC)</span>
                  </div>
                </div>
                <div className="group relative mt-4 px-1 sm:px-2">
                  <span
                    className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.578 17.3867C25.7082 24.8867 18.1118 29.4511 10.6109 27.5809C3.11305 25.7111 -1.45134 18.1142 0.419279 10.6148C2.28826 3.11387 9.88462 -1.45087 17.3833 0.418928C24.8837 2.28873 29.4478 9.88639 27.5778 17.3868L27.5779 17.3867H27.578Z"
                        fill="#1181E7"
                      />
                      <g clip-path="url(#clip0_73_10312)">
                        <path
                          d="M13.9982 6.12451L13.8926 6.48343V16.8976L13.9982 17.003L18.8323 14.1456L13.9982 6.12451Z"
                          fill="#D6D6D6"
                        />
                        <path
                          d="M13.9982 6.12451L9.16406 14.1456L13.9982 17.003V11.9483V6.12451Z"
                          fill="white"
                        />
                        <path
                          d="M13.998 17.9175L13.9385 17.9901V21.6998L13.998 21.8736L18.835 15.0615L13.998 17.9175Z"
                          fill="#D6D6D6"
                        />
                        <path
                          d="M13.9982 21.8736V17.9175L9.16406 15.0615L13.9982 21.8736Z"
                          fill="white"
                        />
                        <path
                          d="M13.998 17.0025L18.8321 14.1451L13.998 11.9478V17.0025Z"
                          fill="#F3F3F3"
                        />
                        <path
                          d="M9.16406 14.1451L13.9982 17.0025V11.9478L9.16406 14.1451Z"
                          fill="#E2E2E2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_73_10312">
                          <rect
                            width="15.749"
                            height="15.749"
                            fill="white"
                            transform="translate(6.125 6.12451)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div
                    className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100"
                  >
                    <span
                      className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"
                    ></span>
                    <span>Bitcoin (BTC)</span>
                  </div>
                </div>
                <div className="group relative mt-4 px-1 sm:px-2">
                  <span
                    className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14" cy="13.9995" r="14" fill="#8247E5" />
                      <g clip-path="url(#clip0_73_10294)">
                        <path
                          d="M17.5729 10.8364C17.3177 10.686 16.9896 10.686 16.6979 10.8364L14.6562 12.0776L13.2708 12.8675L11.2656 14.1087C11.0104 14.2591 10.6823 14.2591 10.3906 14.1087L8.82292 13.1308C8.56771 12.9803 8.38542 12.6794 8.38542 12.3409V10.4603C8.38542 10.1594 8.53125 9.85852 8.82292 9.67046L10.3906 8.73016C10.6458 8.57972 10.974 8.57972 11.2656 8.73016L12.8333 9.70807C13.0885 9.85852 13.2708 10.1594 13.2708 10.4979V11.7391L14.6562 10.9117V9.63285C14.6562 9.33195 14.5104 9.03106 14.2187 8.843L11.3021 7.07524C11.0469 6.92479 10.7187 6.92479 10.4271 7.07524L7.4375 8.88061C7.14583 9.03106 7 9.33195 7 9.63285V13.1684C7 13.4693 7.14583 13.7702 7.4375 13.9582L10.3906 15.726C10.6458 15.8764 10.974 15.8764 11.2656 15.726L13.2708 14.5224L14.6562 13.6949L16.6615 12.4914C16.9167 12.3409 17.2448 12.3409 17.5365 12.4914L19.1042 13.4317C19.3594 13.5821 19.5417 13.883 19.5417 14.2215V16.1021C19.5417 16.403 19.3958 16.7039 19.1042 16.892L17.5729 17.8323C17.3177 17.9827 16.9896 17.9827 16.6979 17.8323L15.1302 16.892C14.875 16.7415 14.6927 16.4406 14.6927 16.1021V14.8985L13.3073 15.726V16.9672C13.3073 17.2681 13.4531 17.569 13.7448 17.757L16.6979 19.5248C16.9531 19.6752 17.2812 19.6752 17.5729 19.5248L20.526 17.757C20.7812 17.6066 20.9635 17.3057 20.9635 16.9672V13.394C20.9635 13.0931 20.8177 12.7923 20.526 12.6042L17.5729 10.8364Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_73_10294">
                          <rect
                            width="14"
                            height="12.6"
                            fill="white"
                            transform="translate(7 7)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div
                    className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100"
                  >
                    <span
                      className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"
                    ></span>
                    <span>Bitcoin (BTC)</span>
                  </div>
                </div>
                <div className="group relative mt-4 px-1 sm:px-2">
                  <span
                    className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14" cy="14" r="14" fill="#F14E51" />
                      <path
                        d="M20.8096 11.2176C20.1191 10.6117 19.1639 9.6864 18.386 9.03016L18.34 8.99953C18.2634 8.94108 18.177 8.89524 18.0845 8.86391C16.2087 8.53142 7.47873 6.9805 7.30841 7.00019C7.26069 7.00654 7.21507 7.02298 7.17492 7.04831L7.13119 7.08112C7.07734 7.1331 7.03645 7.19589 7.01151 7.26487L7 7.29331V7.44862V7.47268C7.98278 10.0736 11.8633 18.5938 12.6274 20.5931C12.6734 20.7288 12.7609 20.9869 12.9243 21H12.9611C13.0486 21 13.4215 20.5319 13.4215 20.5319C13.4215 20.5319 20.0869 12.8495 20.7612 12.0314C20.8485 11.9306 20.9256 11.8222 20.9914 11.7076C21.0082 11.618 21.0003 11.5257 20.9684 11.4399C20.9366 11.354 20.8818 11.2774 20.8096 11.2176ZM15.1315 12.1123L17.9763 9.87015L19.645 11.3314L15.1315 12.1123ZM14.0268 11.9657L9.12898 8.1508L17.0534 9.53984L14.0268 11.9657ZM14.4687 12.9654L19.4816 12.1976L13.7506 18.76L14.4687 12.9654ZM8.46382 8.53142L13.6171 12.6876L12.8714 18.7644L8.46382 8.53142Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div
                    className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100"
                  >
                    <span
                      className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"
                    ></span>
                    <span>Bitcoin (BTC)</span>
                  </div>
                </div>
              </div>

              <a
                href="javascript:void(0)"
                className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white hover:bg-opacity-90 dark:hover:bg-opacity-90"
              >
                Buy Tokens 47% Off
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 -z-10 h-full w-full opacity-20"
        style={{backgroundImage: "linear-gradient(180deg,#3e7dff 0%,rgba(62, 125, 255, 0) 100%)"}}
      ></div>
      <img
        src="images/shapes/hero-shape-1.svg"
        alt=""
        className="absolute left-0 top-0 -z-10"
      />
      <img
        src="images/shapes/hero-shape-2.svg"
        alt=""
        className="absolute right-0 top-0 -z-10"
      />
    </section> */}
 {/*   <section>
      <div className="container">
        <div
          className="wow fadeInUp border-y border-[#F3F4F4] pt-10 dark:border-[#2D2C4A]"
          data-wow-delay="0s"
        >
          <h2
            className="mb-10 text-center text-lg font-bold text-black dark:text-white sm:text-2xl"
          >
            Join the 20,000+ companies using the our platform
          </h2>

          <div
            className="-mx-4 flex flex-wrap items-center justify-center"
          >
            <div className="px-4">
              <a
                href="https://uideck.com"
                target="_blank"
                rel="nofollow noopenner"
                className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
              >
                <img
                  src="/uideck-white.svg"
                  alt="uideck"
                  className="mx-auto hidden h-10 text-center dark:block"
                />
                <img
                  src="/uideck.svg"
                  alt="uideck"
                  className="mx-auto h-10 text-center dark:hidden"
                />
              </a>
            </div>
            <div className="px-4">
              <a
                href="https://tailgrids.com"
                target="_blank"
                rel="nofollow noopenner"
                className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
              >
                <img
                  src="/TailGrids-white.svg"
                  alt="tailgrids"
                  className="mx-auto hidden h-10 text-center dark:block"
                />
                <img
                  src="/tailgrids.svg"
                  alt="tailgrids"
                  className="mx-auto h-10 text-center dark:hidden"
                />
              </a>
            </div>
            <div className="px-4">
              <a
                href="https://lineicons.com"
                target="_blank"
                rel="nofollow noopenner"
                className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
              >
                <img
                  src="/LineIcons-white.svg"
                  alt="lineicons"
                  className="mx-auto hidden h-10 text-center dark:block"
                />
                <img
                  src="/lineicons.svg"
                  alt="lineicons"
                  className="mx-auto h-10 text-center dark:hidden"
                />
              </a>
            </div>
            <div className="px-4">
              <a
                href="https://ayroui.com"
                target="_blank"
                rel="nofollow noopenner"
                className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
              >
                <img
                  src="/AyroUI-white.svg"
                  alt="ayroui"
                  className="mx-auto hidden h-10 text-center dark:block"
                />
                <img
                  src="/ayroui.svg"
                  alt="ayroui"
                  className="mx-auto h-10 text-center dark:hidden"
                />
              </a>
            </div>
            <div className="px-4">
              <a
                href="https://plainadmin.com"
                target="_blank"
                rel="nofollow noopenner"
                className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
              >
                <img
                  src="/PlainAdmin-white.svg"
                  alt="plainadmin"
                  className="mx-auto hidden h-10 text-center dark:block"
                />
                <img
                  src="/plainadmin.svg"
                  alt="plainadmin"
                  className="mx-auto h-10 text-center dark:hidden"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>*/}
    </div>
  );
};

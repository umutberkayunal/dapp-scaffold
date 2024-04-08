import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { SignAirdrop } from '../components/SignAirdrop';
import { ClaimAirdrop } from '../components/ClaimAirdrop';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification';

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Airdropscanner - Let Airdrops find you!</title>
            </Head>

            <ContextProvider>
                <div className="flex flex-col h-screen">
                    <Notifications />
                    <AppBar />
                    <ContentContainer>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                            {/* Ongoing Airdrops column */}
                            <div className="pl-10">
                            <h2 className="text-white text-3xl font-bold">Ongoing Airdrops</h2>
                                <p className="text-sm text-blue-500">These airdrops are currently ongoing and available for participation.</p>
                                <div
                              className="wow fadeInUp mb-10 overflow-hidden rounded-lg bg-light-bg dark:bg-[#14102C]"
                              data-wow-delay="0s"
                            >
                              <a href="https://dflow.net/en/reward" className="block mt-5">
                                <img
                                  src="/dflow.png"
                                  alt="blog-image"
                                  className="w-full mb-10"
                                  style={{ maxWidth: "600px", height: "300px" }}
                                />
                              </a>
                              <SignAirdrop />
                              <div className="p-7 lg:px-6 xl:p-8">
                                <div className="mb-2 flex items-center">
                                  <p
                                    className="mr-3 flex items-center text-body-color-2 dark:text-body-color"
                                  >
                                    <span className="pr-2 text-dark dark:text-white">
                                      <svg
                                        width="25"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        className="fill-current"
                                      >
                                        <path
                                          d="M11.0001 3.66675C11.9725 3.66675 12.9052 4.05306 13.5928 4.74069C14.2804 5.42832 14.6667 6.36095 14.6667 7.33341C14.6667 8.30587 14.2804 9.2385 13.5928 9.92614C12.9052 10.6138 11.9725 11.0001 11.0001 11.0001C10.0276 11.0001 9.09499 10.6138 8.40736 9.92614C7.71972 9.2385 7.33341 8.30587 7.33341 7.33341C7.33341 6.36095 7.71972 5.42832 8.40736 4.74069C9.09499 4.05306 10.0276 3.66675 11.0001 3.66675ZM11.0001 12.8334C15.0517 12.8334 18.3334 14.4742 18.3334 16.5001V18.3334H3.66675V16.5001C3.66675 14.4742 6.94841 12.8334 11.0001 12.8334Z"
                                        />
                                      </svg>
                                    </span>
                                    By Admin
                                  </p>
                                  <p
                                    className="flex items-center text-body-color-2 dark:text-body-color"
                                  >
                                    <span className="pr-2 text-dark dark:text-white">
                                      <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        className="fill-current"
                                      >
                                        <path
                                          d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z"
                                        />
                                      </svg>
                                    </span>
                                    Jan 25, 2025
                                  </p>
                                </div>

                                <h3>
                                  <a
                                    href="https://dflow.net/en"
                                    className="mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-lg xl:text-2xl"
                                  >
                                    Dflow Protocol
                                  </a>
                                </h3>
                                <p
                                  className="text-base font-medium text-body-color-2 dark:text-body-color"
                                >
                                  The DFlow protocol allows liquidity venues to charge dynamic fees based on the toxicity of the order flow. Learn More About DFlow and join the campaigns!
                                </p>
                              </div>
                            </div>
                            </div>

                            {/* Claim Phase Airdrops column */}
                            <div className="pl-5">
                            <h2 className="text-white text-3xl font-bold">Claim Phase Airdrops</h2>
                                <p className="text-sm text-blue-500">These airdrops are in the claim phase. Make sure to claim your rewards.</p>
                                <div
                              className="wow fadeInUp mb-10 overflow-hidden rounded-lg bg-light-bg dark:bg-[#14102C]"
                              data-wow-delay="0s"
                            >
                              <a href="https://wormhole.com/" className="block mt-5">
                                <img
                                  src="/wormhole.jpg"
                                  alt="blog-image"
                                  className="w-full mb-10"
                                  style={{ maxWidth: "600px", height: "300px" }}
                                />
                                <ClaimAirdrop />
                              </a>
                              <div className="p-7 lg:px-6 xl:p-8">
                                <div className="mb-2 flex items-center">
                                  <p
                                    className="mr-3 flex items-center text-body-color-2 dark:text-body-color"
                                  >
                                    <span className="pr-2 text-dark dark:text-white">
                                      <svg
                                        width="25"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        className="fill-current"
                                      >
                                        <path
                                          d="M11.0001 3.66675C11.9725 3.66675 12.9052 4.05306 13.5928 4.74069C14.2804 5.42832 14.6667 6.36095 14.6667 7.33341C14.6667 8.30587 14.2804 9.2385 13.5928 9.92614C12.9052 10.6138 11.9725 11.0001 11.0001 11.0001C10.0276 11.0001 9.09499 10.6138 8.40736 9.92614C7.71972 9.2385 7.33341 8.30587 7.33341 7.33341C7.33341 6.36095 7.71972 5.42832 8.40736 4.74069C9.09499 4.05306 10.0276 3.66675 11.0001 3.66675ZM11.0001 12.8334C15.0517 12.8334 18.3334 14.4742 18.3334 16.5001V18.3334H3.66675V16.5001C3.66675 14.4742 6.94841 12.8334 11.0001 12.8334Z"
                                        />
                                      </svg>
                                    </span>
                                    By Admin
                                  </p>
                                  <p
                                    className="flex items-center text-body-color-2 dark:text-body-color"
                                  >
                                    <span className="pr-2 text-dark dark:text-white">
                                      <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        className="fill-current"
                                      >
                                        <path
                                          d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z"
                                        />
                                      </svg>
                                    </span>
                                    Jan 25, 2025
                                  </p>
                                </div>

                                <h3>
                                  <a
                                    href="https://wormhole.com/"
                                    className="mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-lg xl:text-2xl"
                                  >
                                    Wormhole
                                  </a>
                                </h3>
                                <p
                                  className="text-base font-medium text-body-color-2 dark:text-body-color"
                                >
                                  Wormhole, a trailblazing open-source blockchain development platform, serves as the linchpin for connecting the decentralized web.
                                </p>
                              </div>
                            </div>
                            </div>

                            {/* Finished Airdrops column */}
                            <div>
                                <h2 className="text-white text-3xl font-bold">Finished Airdrops</h2>
                                <p className="text-sm text-blue-500">These airdrops have ended. Stay tuned for future airdrop opportunities.</p>
                                <div
                              className="wow fadeInUp mb-10 overflow-hidden rounded-lg bg-light-bg dark:bg-[#14102C]"
                              data-wow-delay="0s"
                            >
                              <a href="https://phantom.app/" className="block mt-5">
                                <img
                                  src="/phantom.jpg"
                                  alt="blog-image"
                                  className="w-full"
                                  style={{ maxWidth: "600px", height: "300px" }}
                                />
                              </a>
                              <div className="p-7 lg:px-6 xl:p-8">
                                <div className="mb-2 flex items-center">
                                  <p
                                    className="mr-3 flex items-center text-body-color-2 dark:text-body-color"
                                  >
                                    <span className="pr-2 text-dark dark:text-white">
                                      <svg
                                        width="25"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        className="fill-current"
                                      >
                                        <path
                                          d="M11.0001 3.66675C11.9725 3.66675 12.9052 4.05306 13.5928 4.74069C14.2804 5.42832 14.6667 6.36095 14.6667 7.33341C14.6667 8.30587 14.2804 9.2385 13.5928 9.92614C12.9052 10.6138 11.9725 11.0001 11.0001 11.0001C10.0276 11.0001 9.09499 10.6138 8.40736 9.92614C7.71972 9.2385 7.33341 8.30587 7.33341 7.33341C7.33341 6.36095 7.71972 5.42832 8.40736 4.74069C9.09499 4.05306 10.0276 3.66675 11.0001 3.66675ZM11.0001 12.8334C15.0517 12.8334 18.3334 14.4742 18.3334 16.5001V18.3334H3.66675V16.5001C3.66675 14.4742 6.94841 12.8334 11.0001 12.8334Z"
                                        />
                                      </svg>
                                    </span>
                                    By Admin
                                  </p>
                                  <p
                                    className="flex items-center text-body-color-2 dark:text-body-color"
                                  >
                                    <span className="pr-2 text-dark dark:text-white">
                                      <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        className="fill-current"
                                      >
                                        <path
                                          d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z"
                                        />
                                      </svg>
                                    </span>
                                    Jan 25, 2025
                                  </p>
                                </div>

                                <h3>
                                  <a href="https://phantom.app/"
                                    
                                    className="mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-lg xl:text-2xl"
                                  >
                                    Phantom Wallet
                                  </a>
                                </h3>
                                <p
                                  className="text-base font-medium text-body-color-2 dark:text-body-color"
                                >
                                  Phantom is a digital wallet tailored for Solana and Ethereum. Phantom is a digital wallet reimagined for DeFi, 
                                  making it safe and easy to store, send, receive, collect, and swap tokens on the Solana blockchain.
                                </p>
                              </div>
                            </div>
                            </div>
                        </div>

                        {/* Render the component passed via props */}
                        <Component {...pageProps} />
                        <Footer />
                    </ContentContainer>
                </div>
            </ContextProvider>
        </>
    );
};

export default App;

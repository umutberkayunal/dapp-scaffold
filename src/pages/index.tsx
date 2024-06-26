import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Airdropscanner - Let Airdrops find you!</title>
        <meta
          name="description"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;

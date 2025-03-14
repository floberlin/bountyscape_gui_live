import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useNetwork, usePrepareContractWrite } from "wagmi";
import Bountyscape from "../utils/Bountyscape.json";


const Home: NextPage = () => {


  const { chain } = useNetwork();
  const contractAddr =
    chain?.name === "Goerli"
      ? "0xB4902E7c5F1645B955E565Cd9d49b04B8770A1Bd"
      : "0x7bE0571a42bF0e4429d1fbcECA791575CFb73b4E";


  const { isError: isErrorEmployer } = usePrepareContractWrite({
    addressOrName: contractAddr,
    contractInterface: Bountyscape.abi,
    functionName: "grantRoleEmployer",
  });

  const { isError: isErrorContractor } = usePrepareContractWrite({
    addressOrName: contractAddr,
    contractInterface: Bountyscape.abi,
    functionName: "grantRoleContractor",
  });

  return (
    <>
      <main className="min-h-screen">
      <br/>
      <div className="grid justify-items-center">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <Image
            src="https://i.ibb.co/N2xdQs5/Logobountyscape.png"
            width="200%"
            height="200%"
            alt="logo"
            quality="100"
          />
          <br/>
      <h1 className="text-3xl font-bold">Welcome to bountyscape</h1>
      <p className="py-6">bountyscape is a decentralized marketplace for freelance services, bug bounties, and jobs! <br/><br/>Your vision is to create access to fair and structured work for everyone around the world, while transforming the flawed employer-contractor model with the help of the web3</p>
      <Link href={
              !isErrorEmployer && !isErrorContractor
                ? "/onboarding"
                : "/bounties"
            }><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
  </div>
      </main>
    </>
  );
};

export default Home;

import React from "react"; 
import dynamic from "next/dynamic";
import MyRatingComponent from "@/components/StarRating";
import CountUp from "@/components/CountUp";

const Header = dynamic(() => import("./Header"), { ssr: true }); 
const Footer = dynamic(() => import("./Footer"), { ssr: true });

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <main>{children}</main> */}
      <MyRatingComponent/>
      <CountUp/>
      <Footer />
    </>
  );
};

MainLayout.displayName = "MainLayout";
export default MainLayout;

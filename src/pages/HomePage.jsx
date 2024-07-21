import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobLisings from "../components/JobListings";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero
        title="Become A React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;

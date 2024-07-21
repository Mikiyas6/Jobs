import React from "react";
import jobs from "../jobs.json";
import JobListings from "../components/JobListings";

const Jobs = () => {
  return (
    <section className="bg-blue-50 px-4 py-10">
      <JobListings isHome={false} />
    </section>
  );
};

export default Jobs;

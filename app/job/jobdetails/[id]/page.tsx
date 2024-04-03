import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() == params.id);
  const session = await getServerSession(authOptions);

  const firstFourJob = JobData.slice(0, 4);

  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href="/signup">
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto">
        <h1 className="text-[20px] font-semibold">Job Description</h1>
        <p className="mt-4 text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, sed
          necessitatibus, architecto harum amet quos deserunt tempore incidunt
          inventore ratione minima earum ea delectus qui cum dignissimos
          officiis est ad.
        </p>
        <h1 className="text-[20px] font-semibold mt-8">Key Responsibilities</h1>
        <p className="mt-4 text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, sed
          necessitatibus, architecto harum amet quos deserunt tempore incidunt
          inventore ratione minima earum ea delectus qui cum dignissimos
          officiis est ad.
        </p>
        <h1 className="text-[20px] font-semibold mt-8">Skills</h1>
        <ul className="mt-4">
          <li className="mt-4 text-black text-opacity-70">ReactJS</li>
          <li className="mt-4 text-black text-opacity-70">NextJS</li>
          <li className="mt-4 text-black text-opacity-70">HTML</li>
          <li className="mt-4 text-black text-opacity-70">CSS</li>
          <li className="mt-4 text-black text-opacity-70">Typescript</li>
        </ul>
        <h1 className="text-[20px] mt-8 font-semibold">Related Job</h1>
        <div className="mt-4">
          {firstFourJob.map((job) => {
            return (
              <Link
                className="space-y-6"
                href={`/job/jobdetails/${job.id}`}
                key={job.id}
              >
                <JobCard job={job} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

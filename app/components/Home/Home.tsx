import React from 'react'
import Hero from './Hero'
import JobCategory from './JobCategory'
import FeaturedJobs from './FeaturedJobs'

const Home = () => {
    return (
        <div>
            <Hero />
            <JobCategory />
            <FeaturedJobs />
        </div>
    )
}

export default Home
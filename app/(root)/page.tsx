import HeadBox from '@/components/HeadBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstname:"Jay"};
  return (
    <section className='home'>
      <div className='home-content'>
        <HeadBox
        type="greeting"
        title="Welcome,"
        user={loggedIn?.firstname || "Guest"}
        subtext="Access your account,manage transactions and many more at one place" />
      </div>
    </section>
  )
}

export default Home

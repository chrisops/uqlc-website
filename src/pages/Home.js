import React from 'react';
import AboutUs from '../components/AboutUs'
import Posts from '../components/Posts'
import PlayerCards from '../components/PlayerCards'

export default function Home() {
  return (
    <>
      <div style={{position: 'relative'}}>
        <PlayerCards />
      </div>
      <AboutUs />
      <br />
      <Posts />
    </>
  );
}

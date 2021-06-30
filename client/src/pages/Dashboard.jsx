import React, {useState} from 'react';
import Header from '../components/dashboard/Header'
import Grid from '../components/dashboard/Grid'
import Footer from "../components/Footer"

const Dashboard = () => {
  const [team, updateTeam ]= useState("")


  console.log("team in parents=>", team);
  return (
  
    <>
      <Header team={team}></Header>
      <Grid team={team} updateTeam={updateTeam}></Grid>
      <Footer/>
    </>
  );
};

export default Dashboard;
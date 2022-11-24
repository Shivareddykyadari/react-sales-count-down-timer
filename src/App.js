import './App.css';
import { useState } from 'react';
import Display from './Display';
import { useEffect } from 'react';


function App() {

const endTime=new Date('Nov 19, 2022 00:00:00').getTime();
const [currentTime,setCurrentTime]=useState(new Date().getTime());
const gap=endTime-currentTime;


const seconds=1000;
const minutes=seconds*60;
const hours=minutes*60;
const days=hours*24;

const remainingDays=Math.floor(gap/days);
const remainingHours=Math.floor((gap%days)/hours);
const remainingMinutes=Math.floor((gap%hours)/minutes);
const remainingSeconds=Math.floor((gap%minutes)/seconds);


useEffect(()=>{
  setTimeout(()=>setCurrentTime(new Date().getTime()),1000);
},[currentTime])


  return (
    <div className="App">
      <center>
        <Display days={remainingDays} hours={remainingHours} minutes={remainingMinutes} seconds={remainingSeconds} />
      </center>
    </div>
  );
}
///Shiva Reddy
export default App;

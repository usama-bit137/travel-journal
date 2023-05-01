import '../Styles/App.css'
import React from "react"
import Header from './Header'
import Destination from './Destination';
let destinations = require("../destinations.json"); // importing JSON file

export default function App() {
  let destinationsArray = destinations.map((dest) => {
    return ([
      <Destination
        key = {dest.key}
        item = {dest}
      />
    ])
  })
  console.log(destinationsArray);
  return (
    <>
      <Header />
      {destinationsArray}
    </>
  )
}

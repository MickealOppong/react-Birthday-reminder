import { useState } from "react";
import Birthday from "./Birthday";
import ClearAll from "./ClearAll";
import Title from './Title';
import { buddies } from "./data";
import { getBirthdays } from "./util.js";

const BirthdayBuddy = () => {
  const [data, SetData] = useState(buddies);

  const clear = () => {
    SetData([])
  }

  const birthday = getBirthdays(data);


  return <section className="container">
    <Title data={birthday} />
    <Birthday data={birthday} />
    <ClearAll onClick={clear} />
  </section>
}

export default BirthdayBuddy;
import React, { useEffect, useState } from "react";
import { container } from "./index.module.less";
import moment from "moment";

export default ({ targetDate, lang="EN" }) => {
  let [days, setDays] = useState("");
  let [hours, setHours] = useState("");
  let [minutes, setMinutes] = useState("");
  let [seconds, setSeconds] = useState("");

  useEffect(() => {
    let myTimezoneOffset = new Date().getTimezoneOffset();
    var m2 = moment(targetDate);
    m2 = m2.subtract(myTimezoneOffset, "minutes");
    m2 = m2.subtract(8 * 60, "minutes");
    let startTimer = () => {
      var m1 = moment();
      var m3 = m2.diff(m1, "minutes");
      var m4 = m2.diff(m1, "seconds");
      var numdays = Math.floor(m3 / 1440);
      var numhours = Math.floor((m3 % 1440) / 60);
      var numminutes = Math.floor((m3 % 1440) % 60);
      var numseconds = Math.floor((m4 % (1440 * 60)) % 60);

      setDays(numdays > 0 ? numdays : 0);
      setHours(numhours > 0 ? numhours : 0);
      setMinutes(numminutes > 0 ? numminutes : 0);
      setSeconds(numseconds > 0 ? numseconds : 0);
    };
    startTimer();
    setInterval(() => {
      startTimer();
    }, 1000);
  }, []);

  return (
    <div className={container}>
      <div>
        <h3>{days}</h3>
        <p>{lang=='EN'?"days":"天"}</p>
      </div>
      <div>
        <h3>{hours}</h3>
        <p>{lang=='EN'?"hours":"小时"}</p>
      </div>
      <div>
        <h3>{minutes}</h3>
        <p>{lang=='EN'?"minutes":"分钟"}</p>
      </div>
      <div>
        <h3>{seconds}</h3>
        <p>{lang=='EN'?"seconds":"秒"}</p>
      </div>
    </div>
  );
};

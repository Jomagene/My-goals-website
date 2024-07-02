function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const day = now.toLocaleString("en-US", { weekday: "long", timeZone: "UTC" });

  document.getElementById("time-utc").textContent = utcTime;
  document.getElementById("day-of-week").textContent = day;
}

setInterval(updateTime, 1000);
updateTime();

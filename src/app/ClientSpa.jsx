"use client"; // only this file is client
import { useState, useEffect } from "react";

export default function ClientSpa() {
  const [open, setOpen] = useState(false);
  useEffect(()=>{/* browser only stuff */}, []);
  return (
    <div>
      <button onClick={()=>setOpen(!open)}>Open</button>
      {open && <p>Booking form / interactive UI</p>}
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { fetchGreetings } from "../store/greetingReducer";

export default function Greetings() {
const dispatch = useDispatch();
const { greeting, status, loading, error } = useSelector(state => state.greeting);
useEffect(() => {
  dispatch(fetchGreetings());
}, [dispatch]);

const handler = () => {
  dispatch(fetchGreetings());
}

return(
  <div>
    <h1>Greetings</h1>
    {loading && <p>Loading...</p>}
    {error && <p>Something went wrong!</p>}
    {status === "success" && <p>{greeting}</p>}
    {status === "failed" && <p>Failed to fetch greeting</p>}
    {!loading && !error && status !== "success" && <button className="btn btn-primary" onClick={handler}>Click the button to fetch a greeting</button>}
  </div>

)
}
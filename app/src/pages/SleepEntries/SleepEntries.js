import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SleepEntries = () => {
  const [sleepEntries, setSleepEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSleepEntries = async () => {
      try {
        const response = await axios.get("http://localhost:8000/sleep-entries");
        setSleepEntries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSleepEntries();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.post(
        "http://localhost:8000/sleep-entries/" + id
      );
      if (response.data.success) {
        const updatedEntries = sleepEntries.filter((entry) => entry.id !== id);
        setSleepEntries(updatedEntries);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sleep Entry List</h1>
      {sleepEntries.length === 0 ? (
        navigate("/add")
      ) : (
        <div className="entries">
          {sleepEntries.map((entry) => (
            <div className="entry" key={entry.id}>
              <h1>
                {new Date(entry.entry_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </h1>
              <span>{entry.sleep_time}</span>
              <p>{entry.wake_time}</p>
              <p>{entry.sleep_duration}</p>
              <button className="delete" onClick={() => handleDelete(entry.id)}>
                Delete
              </button>
              <button className="update">
                <Link to={`/add/${entry.id}`}>Update</Link>
              </button>
            </div>
          ))}
        </div>
      )}
      <button>
        <Link to="/add">Upload new entry</Link>
      </button>
    </div>
  );
};

export default SleepEntries;

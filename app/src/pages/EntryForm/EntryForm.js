import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EntryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    entry_date: "",
    sleep_time: "",
    wake_time: "",
    sleep_duration: "",
  });

  useEffect(() => {
    if (id) {
      const fetchEntryDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/sleep-entries/${id}`
          );
          const data = response.data[0];
          if (data) {
            setInput({
              entry_date: data.entry_date,
              sleep_time: data.sleep_time,
              wake_time: data.wake_time,
              sleep_duration: data.sleep_duration,
            });
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchEntryDetails();
    }
  }, [id]);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitEntry = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/sleep-entries",
        input
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const updateEntry = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8000/sleep-entries/" + id, input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>{id ? "Update Entry" : "Add New Entry"}</h1>
      <input type="date" value={input.entry_date} onChange={handleChange} name="entry_date" />
      <input type="time" value={input.sleep_time} onChange={handleChange} name="sleep_time" />
      <input type="time" value={input.wake_time} onChange={handleChange} name="wake_time" />
      <input type="text" value={input.sleep_duration} onChange={handleChange} name="sleep_duration" />
      <button className="formButton" onClick={id ? updateEntry : submitEntry}>
        {id ? "Update Entry" : "Upload Entry"}
      </button>
    </div>
  );
};

export default EntryForm;

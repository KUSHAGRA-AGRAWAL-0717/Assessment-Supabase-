import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabase.js"; // Import the supabase client
import "./section.css";

function Section() {
  const [students, setStudents] = useState([]); // State to hold fetched students data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const navigate = useNavigate();

  // Helper function to format dates
  const formatDate = (dateString, includeTime = false) => {
    if (!dateString) return "Invalid Date";
    try {
      const date = new Date(dateString);
      const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        ...(includeTime && {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };
      return date.toLocaleString("en-US", options).replace(",", "");
    } catch (error) {
      console.error("Error formatting date:", error.message);
      return "Invalid Date";
    }
  };

  // Fetch student data from Supabase
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true); // Start loading
      try {
        const { data, error } = await supabase.from("students").select("*");
        if (error) throw error;

        // Format dates for each student
        const formattedData = data.map((student) => ({
          ...student,
          date_joined: formatDate(student.date_joined), // Format date_joined
          last_login: formatDate(student.last_login, true), // Format last_login with time
        }));

        setStudents(formattedData); // Set the formatted students data to state
      } catch (error) {
        console.error("Error fetching students:", error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchStudents();
  }, []); // Empty dependency array to run only once on mount

  const handleAddStudent = () => {
    navigate("/student");
  };

  return (
    <div className="section-container">
      <div className="header">
        <select className="select-dropdown">
          <option value="AY 2024-25">AY 2024-25</option>
          {/* Add more options here */}
        </select>
        <select className="select-dropdown">
          <option value="CBSE 9">CBSE 9</option>
          {/* Add more options here */}
        </select>
        <div className="add">
          <button className="add-student-button" onClick={handleAddStudent}>
            + Add new Student
          </button>
        </div>
      </div>
      {loading ? (
        <div>Loading students...</div>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Cohort</th>
              <th>Courses</th>
              <th>Date Joined</th>
              <th>Last Login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.cohort}</td>
                <td>{student.courses.join(", ")}</td>
                <td>{student.date_joined}</td>
                <td>{student.last_login}</td>
                <td className={student.status}>
                  <div
                    className="status-color"
                    style={{
                      backgroundColor: student.status === "inactive" ? "red" : "green",
                    }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Section;

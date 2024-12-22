import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import supabase from "../config/supabase.js"; // Import Supabase client
import "./student.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    id: "", // ID for identifying the record during update/delete
    name: "",
    cohort: "",
    courses: "",
    dateJoined: "",
    lastLogin: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const coursesArray = formData.courses.split(",").map((course) => course.trim());

    try {
      const { data, error } = await supabase
        .from("students")
        .insert([
          {
            name: formData.name,
            cohort: formData.cohort,
            courses: coursesArray,
            date_joined: formData.dateJoined,
            last_login: formData.lastLogin,
            status: formData.status,
          },
        ]);

      if (error) throw error;

      toast.success("Student details submitted successfully!");
      navigate("/");
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error inserting student data:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!formData.id) {
      toast.error("Please provide the student ID to update.");
      return;
    }

    const coursesArray = formData.courses.split(",").map((course) => course.trim());

    try {
      const { data, error } = await supabase
        .from("students")
        .update({
          name: formData.name,
          cohort: formData.cohort,
          courses: coursesArray,
          date_joined: formData.dateJoined,
          last_login: formData.lastLogin,
          status: formData.status,
        })
        .eq("id", formData.id); // Update record with matching ID

      if (error) throw error;

      toast.success("Student details updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("An error occurred while updating. Please try again later.");
      console.error("Error updating student data:", error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!formData.id) {
      toast.error("Please provide the student ID to delete.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("students")
        .delete()
        .eq("id", formData.id); // Delete record with matching ID

      if (error) throw error;

      toast.success("Student record deleted successfully!");
      navigate("/");
    } catch (error) {
      toast.error("An error occurred while deleting. Please try again later.");
      console.error("Error deleting student data:", error);
    }
  };

  return (
    <form className="student-form">
      <header className="app-header">
        <h1>Student Details</h1>
      </header>
      <h2 className="form-title">Student Registration Form</h2>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="id">Student ID (for Update/Delete):</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cohort">Cohort:</label>
          <input
            type="text"
            id="cohort"
            name="cohort"
            value={formData.cohort}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="courses">Courses:</label>
          <textarea
            id="courses"
            name="courses"
            value={formData.courses}
            onChange={handleChange}
            placeholder="Enter courses separated by commas"
            required
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateJoined">Date Joined:</label>
          <input
            type="date"
            id="dateJoined"
            name="dateJoined"
            value={formData.dateJoined}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastLogin">Last Login:</label>
          <input
            type="datetime-local"
            id="lastLogin"
            name="lastLogin"
            value={formData.lastLogin}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
     <div className="btns">
     <button onClick={handleSubmit} className="form-button">
        Submit Details
      </button>
      <button onClick={handleUpdate} className="form-button">
        Update Details
      </button>
      <button onClick={handleDelete} className="form-button">
        Delete Record
      </button>
     </div>
    </form>
  );
};

export default StudentForm;

import React from "react";

const Help = () => {
  return (
    <div className="help-container">
      <h3>Available Commands</h3>
      <table className="help-table">
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>about</td>
            <td>Displays information about me</td>
          </tr>
          <tr>
            <td>clear</td>
            <td>Clears the terminal screen</td>
          </tr>
          <tr>
            <td>contact</td>
            <td>Shows contact info and social media links</td>
          </tr>
          <tr>
            <td>projects</td>
            <td>Lists all of my projects</td>
          </tr>
          <tr>
            <td>skills</td>
            <td>Displays my technical skills</td>
          </tr>
          <tr>
            <td>home</td>
            <td>go to home</td>
          </tr>
          <tr>
            <td>help</td>
            <td>Lists all available commands</td>
          </tr>
          <tr>
            <td>time</td>
            <td>Know  current time</td>
          </tr>
          <tr>
            <td>date</td>
            <td>Know  current date</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Help;

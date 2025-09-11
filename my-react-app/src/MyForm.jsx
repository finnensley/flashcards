import React from 'react';

function MyForm() {
  return (
    <form id="createCard">
      <div>
        <label htmlFor="category">Select Category:</label>
        <select id="category">
          <option value="">Choose One:</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Javascript">Javascript</option>
          <option value="React">React</option>
          <option value="BigO">BigO</option>
        </select>
      </div>
      <div>
        <label htmlFor="questionInput">Question:</label>
        <input
          type="text"
          id="questionInput"
          placeholder="Enter question or challenge:"
        />
      </div>
      <div>
        <label htmlFor="difficulty">Difficulty</label>
        <select id="difficulty">
          <option value="">Choose One:</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label htmlFor="type">Type</label>
        <select id="type">
          <option value="">Choose One:</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="boolean">True or False</option>
          <option value="text">Fill in the blank</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default MyForm;
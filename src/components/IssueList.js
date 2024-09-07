import React from 'react';

const IssueList = ({ issues, onEdit, onDelete }) => {
  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <div key={issue.id} className="issue">
          <h2>{issue.title}</h2>
          <p>{issue.description}</p>
          <div>
            <button onClick={() => onEdit(issue)}>Edit</button>
            <button onClick={() => onDelete(issue.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IssueList;

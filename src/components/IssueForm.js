import React, { useState, useEffect } from 'react';

const IssueForm = ({ isUpdate, currentIssue, onSubmit }) => {
  const [title, setTitle] = useState(isUpdate ? currentIssue.title : '');
  const [description, setDescription] = useState(isUpdate ? currentIssue.description : '');

  useEffect(() => {
    if (isUpdate && currentIssue) {
      setTitle(currentIssue.title);
      setDescription(currentIssue.description);
    }
  }, [isUpdate, currentIssue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="issue-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{isUpdate ? 'Update Issue' : 'Create Issue'}</button>
    </form>
  );
};

export default IssueForm;

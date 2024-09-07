import React, { useState, useEffect } from 'react';
import IssueForm from './components/IssueForm';
import IssueList from './components/IssueList';
import { fetchIssues, createIssue, updateIssue, deleteIssue } from './services/api';
import './styles/app.css';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [currentIssue, setCurrentIssue] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const loadIssues = async () => {
      try {
        const data = await fetchIssues();
        setIssues(data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    loadIssues();
  }, []);

  const handleCreateIssue = async (issue) => {
    try {
      const newIssue = await createIssue(issue);
      setIssues([...issues, newIssue]);
    } catch (error) {
      console.error('Error creating issue:', error);
    }
  };

  const handleUpdateIssue = async (issue) => {
    if (currentIssue) {
      try {
        const updatedIssue = await updateIssue(currentIssue.id, issue);
        setIssues(issues.map(i => (i.id === currentIssue.id ? updatedIssue : i)));
        setIsUpdating(false);
        setCurrentIssue(null);
      } catch (error) {
        console.error('Error updating issue:', error);
      }
    }
  };

  const handleDeleteIssue = async (id) => {
    try {
      await deleteIssue(id);
      setIssues(issues.filter(issue => issue.id !== id));
    } catch (error) {
      console.error('Error deleting issue:', error);
    }
  };

  const handleEditClick = (issue) => {
    setIsUpdating(true);
    setCurrentIssue(issue);
  };

  return (
    <div className="app">
      <h1>Issue Tracker</h1>
      <IssueForm
        isUpdate={isUpdating}
        currentIssue={currentIssue}
        onSubmit={isUpdating ? handleUpdateIssue : handleCreateIssue}
      />
      <IssueList
        issues={issues}
        onEdit={handleEditClick}
        onDelete={handleDeleteIssue}
      />
    </div>
  );
};

export default App;

const API_URL = 'http://localhost:5000/api/issues';

export const fetchIssues = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch issues');
  return response.json();
};

export const createIssue = async (issue) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(issue),
  });
  if (!response.ok) throw new Error('Failed to create issue');
  return response.json();
};

export const updateIssue = async (id, issue) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(issue),
  });
  if (!response.ok) throw new Error('Failed to update issue');
  return response.json();
};

export const deleteIssue = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete issue');
};

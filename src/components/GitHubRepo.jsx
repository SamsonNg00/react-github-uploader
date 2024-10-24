import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, CircularProgress, Link } from '@mui/material';

const GitHubRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid container spacing={4} style={{ marginTop: '20px', padding: '20px' }}>
      {repos.map((repo) => (
        <Grid item xs={12} sm={6} md={4} key={repo.id}>
          <Card style={{ height: '100%', backgroundColor: '#fafafa' }} elevation={3}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#3f51b5' }}>
                <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                  {repo.name}
                </Link>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {repo.description || 'No description available'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GitHubRepo;

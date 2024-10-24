import FileUpload from './components/FileUpload';
import GitHubRepo from './components/GitHubRepo';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>React GitHub Uploader</h1>
      <FileUpload />
      <GitHubRepo />
    </div>
  );
}

export default App;

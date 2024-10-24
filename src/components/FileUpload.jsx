import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent, Typography,  Grid } from '@mui/material';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', mt: 4, p: 2 }}>
      <CardContent>
        <div {...getRootProps()} style={{ border: '2px dashed #007bff', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
          <input {...getInputProps()} />
          <Typography variant="h6">Drag `n` drop files here, or click to select files</Typography>
        </div>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {files.map((file) => (
            <Grid item xs={6} key={file.path}>
              <Card>
                <CardContent>
                  <img src={file.preview} alt="preview" width={100} />
                  <Typography variant="body2">{file.path}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FileUpload;

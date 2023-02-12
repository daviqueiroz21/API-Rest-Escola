import app from './app';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`CTRL + Clique http://localhost:${port}`);
});

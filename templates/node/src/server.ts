import app from "./app";

// Por si llego a deployar la app en heroku.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`);
}); 
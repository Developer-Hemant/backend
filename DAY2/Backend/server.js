import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("server is read!");
});

//list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        title: "Trust Issues",
        content: "Why don't scientists trust atoms? Because they make up everything!"
      },
      {
        id: 2,
        title: "Scarecrow Award",
        content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
      },
      {
        id: 3,
        title: "Programmer's Nature",
        content: "Why don't programmers like nature? It has too many bugs."
      },
      {
        id: 4,
        title: "Java Glasses",
        content: "Why do Java developers wear glasses? Because they don't see sharp."
      },
      {
        id: 5,
        title: "Sad Math Book",
        content: "Why did the math book look sad? Because it had too many problems."
      }
    ];

    res.json(jokes);
  });
  

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});

 
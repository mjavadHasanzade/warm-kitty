const getAll = (req, res) => {
  //? 1
  const nouns = ["chockolate", "glass", "Cat", "Pen", "pillow"];
  const adj = ["warm", "scary", "Blue", "funny", "salty"];

  res.send({
    name0: process.env.mjavad,
    name1: adj[Math.ceil(Math.random() * adj.length - 1)],
    name2: nouns[Math.ceil(Math.random() * nouns.length - 1)],
    name4: new Date().getTime()
  });
};

module.exports = { getAll };

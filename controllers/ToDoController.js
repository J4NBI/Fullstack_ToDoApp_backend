import ToDoModel from "../models/ToDoModel.js";

export const getToDo = async (req, res) =>{
  try {
    const toDo = await ToDoModel.find();
    res.send(toDo)
  } catch (error) {
    res.status(500).send(error);
  
} 
};

export const saveToDo = async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    const toDo = await ToDoModel.create({ text: data.text });
    res.send(toDo);
  } catch (error) {
    res.status(500).send({ message: "Error saving to-do" });
  }
};

export const updateToDo = async (req, res) => {
  const {_id, text} = req.body; 
  ToDoModel.findByIdAndUpdate(_id, {text})
  .then(() => {
    res.status(200);
    res.send("updated successfully");
  }).catch((err) => {
    res.status(500).send("Error updating to-do");
  });
}

export const deleteToDo = async (req, res) => {
  const { _id } = req.body;
  console.log(_id) 
  ToDoModel.findByIdAndDelete(_id)
  .then(() => {
    res.status(200);
    res.send("deleted successfully");
  }).catch((err) => {
    res.status(500).send("Error deleting to-do");
  });
}
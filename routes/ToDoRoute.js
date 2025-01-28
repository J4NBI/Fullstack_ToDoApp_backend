import express from 'express';
import { getToDo,saveToDo, updateToDo, deleteToDo} from '../controllers/ToDoController.js';

const router = express.Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.put('/update', updateToDo);
router.delete('/delete', deleteToDo);


export default router;
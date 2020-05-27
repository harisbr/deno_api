import { Router } from 'https://deno.land/x/oak/mod.ts';
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  getEmployeeById,
  deleteEmployee,
  login
} from './employeeCtrl.ts';
import validateToken from './authMiddleware.ts';

const router = new Router();

router.get('/employees', getEmployees);
router.post('/employees', validateToken, addEmployee);
router.put('/employees/:id', validateToken, updateEmployee);
router.get('/employees/:id', getEmployeeById);
router.delete('/employees/:id', validateToken, deleteEmployee);

router.post('/login', login);

export default router;

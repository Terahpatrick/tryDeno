import { 
  Router
} from 'https://deno.land/x/oak/mod.ts';

import UserController from '../controllers/UserController.ts';


const router = new Router();

router
  .get("/users", UserController.index)

  .get("users/:id", UserController.show)

  .post("/users", UserController.store)

  .patch("/users/:name", UserController.update)
  
  .delete("/users/:name", UserController.destroy);

export default router;
import { 
  Router, 
  RouterContext 
} from 'https://deno.land/x/oak/mod.ts';


const router = new Router();

router
  .get("/", (context: RouterContext) => {
    context.response.body = "Welcome to this amaizing API";
  })

export default router;
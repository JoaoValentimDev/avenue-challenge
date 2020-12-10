import { Request, Response, Express } from 'express';
import  { showFullDateNow } from '../utils/date/date';


export const userRoute =  (app : Express) => {  
    app.get('/users', (req : Request, res : Response) => {
       console.log(`/users is active ${showFullDateNow()}`);
       res.json([
           { userName : 'John', password: '123456' },
           { userName : 'Doe', password: '1234567' }
       ]) 
  });
}

import  { customExpress } from './config/customExpress';
import  { showFullDateNow } from './utils/date/date';
 
const port = 3001 || process.env.PORT;

const app = customExpress();
app.listen(port , () => console.log(`Backend is running on port ${port} - in ${showFullDateNow()}`));
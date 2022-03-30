import express, { Application } from 'express';
import hbs from 'hbs';
const app: Application = express();
const port: string | number  = process.env.PORT || 3000;
import apiRoutes from './routes/api.routes'

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use('/', apiRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
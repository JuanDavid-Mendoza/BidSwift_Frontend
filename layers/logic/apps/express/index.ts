import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DBConnection from '../../src/shared/postgre/db.postgre';
dotenv.config();

// Routers
// import { employeeRouter } from './employees';
// import { requirementRouter } from './requirements';
// import { profileRouter } from './profiles';
// import { candidateRouter } from './candidates';
// import { testRouter } from './tests';

const app = express();
const port = process.env.PORT ?? '3000';

app.use(express.json());
app.use(cors());
app.options('*', cors());

// (async function () {
//   const response = await DBConnection.getInstance().executeQuery('select * from product');
//   console.log(response)
// })()

// Routes
// app.use(employeeRouter, requirementRouter, profileRouter, candidateRouter, testRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
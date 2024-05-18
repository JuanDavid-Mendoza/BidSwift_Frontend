import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Routers
import { userRouter } from './users';
import { auctionRouter } from './auctions';
import { bidRouter } from './bids';

const app = express();
const port = '3030';

app.use(express.json());
app.use(cors());
app.options('*', cors());

// Routes
app.use(userRouter, auctionRouter, bidRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
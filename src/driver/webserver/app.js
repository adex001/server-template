import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import '@config';
import { userRoute } from '../../services';
import '../../db/orm';

const PORT = process.env.PORT || 2000;
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app = express();

// MIDDLEWARES
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(helmet());

// Routes from Services
app.use(userRoute);

// Routing
app.get('/', (req, res) => res.status(200).json({
  status: true,
  message: 'I am alive at this port',
}));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});

export default app;

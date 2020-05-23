import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

//configuration
dotenv.config();

//validate env 
if (!process.env.PORT) process.exit(1);

//Load variables
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();


//setup
app.use(helmet());
app.use(cors());
app.use(express.json());

//start server 
const server = app.listen(PORT, () => {
    console.log(`started jwala on port ${PORT}`);
  });

//Webpack HMR Activation
type ModuleId = string | number;
interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}
declare const module: WebpackHotModule;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
 }
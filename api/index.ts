import serverless from 'serverless-http';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const serverModule = require('../dist/server.cjs');
const app = serverModule.default || serverModule;

export default serverless(app);

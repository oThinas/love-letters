import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

import './db.connect.js';

const app = express();
const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, '../..', 'public');
app.use(express.static(publicDir));

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => console.log('Servidor rodando'));

export const io = new Server(server);

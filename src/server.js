import { createServer } from 'http';

async function handler(req, res) {
  res.end('hello world');
}

export default createServer(handler);
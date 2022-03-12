import { createServer } from 'http';
import { once } from 'events';
import { randomUUID } from 'crypto';

const Database = new Map();

const responseJSON = (data, response) => response.end(JSON.stringify(data))

async function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return responseJSON([...Database.values()], response);
  }

  if (method === "POST") {
    const body = JSON.parse(await once(request, 'data'));
    console.log('recebido', body);
    
    const id = randomUUID();
    Database.set(id, body);
    return responseJSON({ ok: 1 }, response);
  }

  if (method === "DELETE") {
    return responseJSON({ ok: 1 }, response);
  }
}

export default createServer(handler);
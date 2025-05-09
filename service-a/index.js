// service-a/index.js
import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify();

// allow dev frontend origin (or use '*' in dev):
app.register(cors, { origin: 'http://localhost:5173' });

app.get('/health', async (req, reply) => {
  return { status: 'ok' };
});

app.get('/analytics', async (request, reply) => {
  // Example payload shape
  return {
    userCount: 1234,
    lastSync: new Date().toISOString(),
  };
});

app.listen({ port: 3001, host: '0.0.0.0' });
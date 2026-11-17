import 'dotenv/config';
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import {PORTFOLIO_DATA} from './src/data/portfolioData.ts';

interface ContactRecord {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  submittedAt: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const contactSubmissions: ContactRecord[] = [];

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({limit: '1mb'}));

  // Reactive API endpoints
  app.get('/api/health', (_req, res) => {
    res.json({status: 'ok', timestamp: new Date().toISOString()});
  });

  app.get('/api/portfolio', (_req, res) => {
    res.json(PORTFOLIO_DATA);
  });

  app.get('/api/releases', (req, res) => {
    const genre = typeof req.query.genre === 'string' ? req.query.genre.trim() : 'All';
    if (genre === 'All' || genre === '') {
      res.json({releases: PORTFOLIO_DATA.releases});
      return;
    }
    const filtered = PORTFOLIO_DATA.releases.filter(
      (item) => item.genre.toLowerCase() === genre.toLowerCase()
    );
    res.json({releases: filtered});
  });

  app.get('/api/youtube', (_req, res) => {
    res.json(PORTFOLIO_DATA.youtubeChannel);
  });

  app.get('/api/apps', (_req, res) => {
    res.json({apps: PORTFOLIO_DATA.developedApps});
  });

  app.post('/api/contact', (req, res) => {
    const body = req.body as Partial<ContactRecord> | undefined;
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const topic = typeof body?.topic === 'string' ? body.topic.trim() : 'General Inquiry';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (name.length < 2) {
      res.status(400).json({error: 'Please enter your name (at least 2 characters).'});
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({error: 'Please enter a valid email address.'});
      return;
    }

    if (message.length < 10) {
      res.status(400).json({error: 'Please include a short message (at least 10 characters).'});
      return;
    }

    const record: ContactRecord = {
      id: `msg_${Date.now()}`,
      name,
      email,
      topic: topic || 'General Inquiry',
      message,
      submittedAt: new Date().toISOString(),
    };

    contactSubmissions.push(record);

    res.status(201).json({
      success: true,
      receiptId: record.id,
      submittedAt: record.submittedAt,
      message: 'Your message has been received by Videsh Karmakar.',
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const {createServer: createViteServer} = await import('vite');
    const vite = await createViteServer({
      server: {middlewareMode: true},
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Videsh Karmakar server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

import express from 'express';
import cors from 'cors';
import { invoiceData } from './invoiceData.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/invoice', (req, res) => {
  console.log('Petición recibida: Obtener factura');
  res.json(invoiceData);
});

app.get('/api/health', (req, res) => {
  console.log('Petición recibida: Verificar salud del servidor');
  res.json({
    status: 'OK',
    message: 'Backend funcionando correctamente',
    timestamp: new Date().toISOString(),
    endpoints: [
      'GET /api/invoice - Obtener datos de factura',
      'GET /api/health - Verificar estado del servidor'
    ]
  });
});

app.get('*', (req, res) => {
  console.log('Ruta no encontrada:', req.url);
  res.json({
    message: 'API de Facturación',
    description: 'Backend para servir datos de factura al frontend Angular',
    availableEndpoints: [
      'GET /api/invoice',
      'GET /api/health'
    ]
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('🚀 SERVIDOR BACKEND INICIADO');
  console.log('🖥 URL local: http://localhost:${PORT}');
});
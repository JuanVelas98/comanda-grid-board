
import { Comanda } from '@/types/comanda';

export const mockComandas: Comanda[] = [
  {
    id: '1',
    codigo: 'CMD001',
    fechaCreacion: new Date('2024-01-15T10:30:00'),
    numeroPedido: '2024001',
    direccion: 'Calle 123 #45-67, Barrio Centro, Bogotá',
    metodoPago: 'efectivo',
    estado: 'pendiente',
    total: 45000
  },
  {
    id: '2',
    codigo: 'CMD002',
    fechaCreacion: new Date('2024-01-15T10:45:00'),
    numeroPedido: '2024002',
    direccion: 'Avenida 68 #24-56, Chapinero, Bogotá',
    metodoPago: 'tarjeta',
    estado: 'preparacion',
    total: 67500
  },
  {
    id: '3',
    codigo: 'CMD003',
    fechaCreacion: new Date('2024-01-15T11:00:00'),
    numeroPedido: '2024003',
    direccion: 'Carrera 15 #85-23, Zona Rosa, Bogotá',
    metodoPago: 'transferencia',
    estado: 'listo',
    total: 89000
  },
  {
    id: '4',
    codigo: 'CMD004',
    fechaCreacion: new Date('2024-01-15T09:15:00'),
    numeroPedido: '2024004',
    direccion: 'Calle 100 #11-90, Zona Norte, Bogotá',
    metodoPago: 'efectivo',
    estado: 'entregado',
    total: 34500
  },
  {
    id: '5',
    codigo: 'CMD005',
    fechaCreacion: new Date('2024-01-15T11:30:00'),
    numeroPedido: '2024005',
    direccion: 'Transversal 22 #56-78, Usaquén, Bogotá',
    metodoPago: 'tarjeta',
    estado: 'pendiente',
    total: 78900
  },
  {
    id: '6',
    codigo: 'CMD006',
    fechaCreacion: new Date('2024-01-15T11:45:00'),
    numeroPedido: '2024006',
    direccion: 'Diagonal 27 #39-84, La Candelaria, Bogotá',
    metodoPago: 'transferencia',
    estado: 'preparacion',
    total: 56700
  }
];

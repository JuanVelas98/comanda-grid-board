
export interface Comanda {
  id: string;
  codigo: string;
  fechaCreacion: Date;
  numeroPedido: string;
  direccion: string;
  metodoPago: 'efectivo' | 'tarjeta' | 'transferencia';
  estado: 'pendiente' | 'preparacion' | 'listo' | 'entregado';
  items?: string[];
  total?: number;
}

export interface EstadoComandas {
  pendiente: Comanda[];
  preparacion: Comanda[];
  listo: Comanda[];
  entregado: Comanda[];
}

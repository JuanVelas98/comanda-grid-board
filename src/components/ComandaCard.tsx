
import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Clock, MapPin, CreditCard, Hash, Package } from 'lucide-react';
import { Comanda } from '@/types/comanda';

interface ComandaCardProps {
  comanda: Comanda;
  index: number;
}

export const ComandaCard: React.FC<ComandaCardProps> = ({ comanda, index }) => {
  const formatFecha = (fecha: Date) => {
    return fecha.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPaymentBadgeClass = (metodo: string) => {
    switch (metodo) {
      case 'efectivo':
        return 'payment-efectivo';
      case 'tarjeta':
        return 'payment-tarjeta';
      case 'transferencia':
        return 'payment-transferencia';
      default:
        return 'payment-efectivo';
    }
  };

  const getEstadoClass = (estado: string) => {
    switch (estado) {
      case 'pendiente':
        return 'estado-pendiente';
      case 'preparacion':
        return 'estado-preparacion';
      case 'listo':
        return 'estado-listo';
      case 'entregado':
        return 'estado-entregado';
      default:
        return 'estado-pendiente';
    }
  };

  return (
    <Draggable draggableId={comanda.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`comanda-card ${getEstadoClass(comanda.estado)} ${
            snapshot.isDragging ? 'dragging' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 text-azul-medio" />
              <span className="font-bold text-gris-oscuro">{comanda.codigo}</span>
            </div>
            <div className={`payment-badge ${getPaymentBadgeClass(comanda.metodoPago)}`}>
              <CreditCard className="w-3 h-3 inline mr-1" />
              {comanda.metodoPago}
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{formatFecha(comanda.fechaCreacion)}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Package className="w-4 h-4" />
              <span className="font-medium">Pedido #{comanda.numeroPedido}</span>
            </div>

            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="text-xs leading-relaxed">{comanda.direccion}</span>
            </div>
          </div>

          {comanda.total && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Total:</span>
                <span className="font-bold text-azul-profundo">
                  ${comanda.total.toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

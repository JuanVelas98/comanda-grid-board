
import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { ComandaCard } from './ComandaCard';
import { Comanda } from '@/types/comanda';
import { Clock, ChefHat, CheckCircle, Truck } from 'lucide-react';

interface KanbanColumnProps {
  title: string;
  estado: string;
  comandas: Comanda[];
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, estado, comandas }) => {
  const getIcon = (estado: string) => {
    switch (estado) {
      case 'pendiente':
        return <Clock className="w-5 h-5" />;
      case 'preparacion':
        return <ChefHat className="w-5 h-5" />;
      case 'listo':
        return <CheckCircle className="w-5 h-5" />;
      case 'entregado':
        return <Truck className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <div className="kanban-column">
      <div className="section-title">
        {getIcon(estado)}
        <span>{title}</span>
        <span className="ml-auto bg-white/20 px-2 py-1 rounded-full text-sm">
          {comandas.length}
        </span>
      </div>

      <Droppable droppableId={estado}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`space-y-3 min-h-[500px] ${
              snapshot.isDraggingOver ? 'drag-over' : ''
            }`}
          >
            {comandas.map((comanda, index) => (
              <ComandaCard key={comanda.id} comanda={comanda} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

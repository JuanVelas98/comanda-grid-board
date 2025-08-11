
import React, { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { KanbanColumn } from '@/components/KanbanColumn';
import { Comanda, EstadoComandas } from '@/types/comanda';
import { mockComandas } from '@/data/mockComandas';
import { BarChart3, RefreshCw } from 'lucide-react';

const Index = () => {
  const [comandas, setComandas] = useState<EstadoComandas>(() => {
    const estadoInicial: EstadoComandas = {
      pendiente: [],
      preparacion: [],
      listo: [],
      entregado: []
    };

    mockComandas.forEach(comanda => {
      estadoInicial[comanda.estado].push(comanda);
    });

    return estadoInicial;
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = comandas[source.droppableId as keyof EstadoComandas];
    const destColumn = comandas[destination.droppableId as keyof EstadoComandas];
    const draggedComanda = sourceColumn.find(c => c.id === draggableId);

    if (!draggedComanda) return;

    // Actualizar el estado de la comanda
    const updatedComanda = {
      ...draggedComanda,
      estado: destination.droppableId as Comanda['estado']
    };

    setComandas(prev => {
      const newState = { ...prev };

      // Remover de la columna origen
      newState[source.droppableId as keyof EstadoComandas] = sourceColumn.filter(
        c => c.id !== draggableId
      );

      // Agregar a la columna destino
      const newDestColumn = [...destColumn];
      newDestColumn.splice(destination.index, 0, updatedComanda);
      newState[destination.droppableId as keyof EstadoComandas] = newDestColumn;

      return newState;
    });
  };

  const totalComandas = Object.values(comandas).reduce((total, arr) => total + arr.length, 0);

  return (
    <div className="min-h-screen bg-gradient-azul p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blanco-principal mb-2">
              Sistema de Comandas
            </h1>
            <p className="text-blanco-principal/80 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              {totalComandas} comandas activas
            </p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-blanco-principal px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200 flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Actualizar
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KanbanColumn
            title="Pendientes"
            estado="pendiente"
            comandas={comandas.pendiente}
          />
          <KanbanColumn
            title="En Preparación"
            estado="preparacion"
            comandas={comandas.preparacion}
          />
          <KanbanColumn
            title="Listos"
            estado="listo"
            comandas={comandas.listo}
          />
          <KanbanColumn
            title="Entregados"
            estado="entregado"
            comandas={comandas.entregado}
          />
        </div>
      </DragDropContext>

      {/* Stats Footer */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(comandas).map(([estado, lista]) => (
          <div key={estado} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-blanco-principal/60 text-sm capitalize mb-1">
              {estado.replace('preparacion', 'En Preparación')}
            </div>
            <div className="text-2xl font-bold text-blanco-principal">
              {lista.length}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

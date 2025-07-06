import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

interface SacredGeometryProps {
  pattern: 'flower-of-life' | 'merkaba' | 'tree-of-life' | 'sri-yantra' | 'mandala';
  size?: number;
  animated?: boolean;
  resonance?: number; // 0-1 for animation intensity
}

export const SacredGeometry: React.FC<SacredGeometryProps> = ({
  pattern,
  size = 300,
  animated = true,
  resonance = 0.5
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    let rotation = 0;

    const drawPattern = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.translate(size / 2, size / 2);
      
      if (animated) {
        ctx.rotate(rotation);
        rotation += 0.005 * resonance;
      }

      // Set gradient colors based on resonance
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
      gradient.addColorStop(0, `hsl(280, 100%, ${50 + resonance * 30}%)`);
      gradient.addColorStop(0.5, `hsl(260, 80%, ${30 + resonance * 20}%)`);
      gradient.addColorStop(1, `hsl(240, 60%, ${10 + resonance * 10}%)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;

      switch (pattern) {
        case 'flower-of-life':
          drawFlowerOfLife(ctx, size / 4);
          break;
        case 'merkaba':
          drawMerkaba(ctx, size / 4);
          break;
        case 'tree-of-life':
          drawTreeOfLife(ctx, size / 4);
          break;
        case 'sri-yantra':
          drawSriYantra(ctx, size / 4);
          break;
        case 'mandala':
          drawMandala(ctx, size / 4);
          break;
      }

      ctx.restore();

      if (animated) {
        animationRef.current = requestAnimationFrame(drawPattern);
      }
    };

    drawPattern();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [pattern, size, animated, resonance]);

  const drawFlowerOfLife = (ctx: CanvasRenderingContext2D, radius: number) => {
    const centerRadius = radius * 0.3;
    
    // Central circle
    ctx.beginPath();
    ctx.arc(0, 0, centerRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Six surrounding circles
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = Math.cos(angle) * centerRadius;
      const y = Math.sin(angle) * centerRadius;
      
      ctx.beginPath();
      ctx.arc(x, y, centerRadius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Outer ring of circles
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      const x = Math.cos(angle) * centerRadius * 1.73;
      const y = Math.sin(angle) * centerRadius * 1.73;
      
      ctx.beginPath();
      ctx.arc(x, y, centerRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
  };

  const drawMerkaba = (ctx: CanvasRenderingContext2D, size: number) => {
    // Upper tetrahedron
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(-size * 0.866, size * 0.5);
    ctx.lineTo(size * 0.866, size * 0.5);
    ctx.closePath();
    ctx.stroke();

    // Lower tetrahedron (inverted)
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.lineTo(-size * 0.866, -size * 0.5);
    ctx.lineTo(size * 0.866, -size * 0.5);
    ctx.closePath();
    ctx.stroke();

    // Connect vertices
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(0, size);
    ctx.moveTo(-size * 0.866, size * 0.5);
    ctx.lineTo(size * 0.866, -size * 0.5);
    ctx.moveTo(size * 0.866, size * 0.5);
    ctx.lineTo(-size * 0.866, -size * 0.5);
    ctx.stroke();
  };

  const drawTreeOfLife = (ctx: CanvasRenderingContext2D, radius: number) => {
    const sephirot = [
      { x: 0, y: -radius * 0.8, name: 'Kether' },
      { x: -radius * 0.4, y: -radius * 0.4, name: 'Binah' },
      { x: radius * 0.4, y: -radius * 0.4, name: 'Chokmah' },
      { x: -radius * 0.6, y: 0, name: 'Chesed' },
      { x: radius * 0.6, y: 0, name: 'Geburah' },
      { x: 0, y: 0, name: 'Tiphereth' },
      { x: -radius * 0.4, y: radius * 0.4, name: 'Netzach' },
      { x: radius * 0.4, y: radius * 0.4, name: 'Hod' },
      { x: 0, y: radius * 0.6, name: 'Yesod' },
      { x: 0, y: radius * 0.9, name: 'Malkuth' }
    ];

    // Draw connections
    const connections = [
      [0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 5], [4, 5],
      [3, 6], [4, 7], [5, 6], [5, 7], [5, 8], [6, 7], [6, 8],
      [7, 8], [8, 9]
    ];

    ctx.strokeStyle = `hsl(280, 60%, 40%)`;
    connections.forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(sephirot[a].x, sephirot[a].y);
      ctx.lineTo(sephirot[b].x, sephirot[b].y);
      ctx.stroke();
    });

    // Draw sephirot
    sephirot.forEach((seph, index) => {
      ctx.beginPath();
      ctx.arc(seph.x, seph.y, radius * 0.08, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${260 + index * 5}, 80%, 60%)`;
      ctx.fill();
      ctx.stroke();
    });
  };

  const drawSriYantra = (ctx: CanvasRenderingContext2D, size: number) => {
    // Outer square
    ctx.strokeRect(-size, -size, size * 2, size * 2);
    
    // Inner triangles - simplified representation
    for (let i = 0; i < 9; i++) {
      const scale = 1 - (i * 0.1);
      const rotation = i * 0.2;
      
      ctx.save();
      ctx.rotate(rotation);
      ctx.scale(scale, scale);
      
      // Upward triangle
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.7);
      ctx.lineTo(-size * 0.6, size * 0.4);
      ctx.lineTo(size * 0.6, size * 0.4);
      ctx.closePath();
      ctx.stroke();
      
      // Downward triangle
      ctx.save();
      ctx.rotate(Math.PI);
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.6);
      ctx.lineTo(-size * 0.5, size * 0.3);
      ctx.lineTo(size * 0.5, size * 0.3);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      
      ctx.restore();
    }
  };

  const drawMandala = (ctx: CanvasRenderingContext2D, radius: number) => {
    const layers = 6;
    const petals = 8;

    for (let layer = 1; layer <= layers; layer++) {
      const layerRadius = (radius * layer) / layers;
      
      // Draw petals
      for (let i = 0; i < petals * layer; i++) {
        const angle = (i * Math.PI * 2) / (petals * layer);
        const x = Math.cos(angle) * layerRadius;
        const y = Math.sin(angle) * layerRadius;
        
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.05 / layer, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw circle
      ctx.beginPath();
      ctx.arc(0, 0, layerRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
  };

  return (
    <Card className="p-4 bg-black/30 border-purple-500/30">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxWidth: size, maxHeight: size }}
      />
    </Card>
  );
};
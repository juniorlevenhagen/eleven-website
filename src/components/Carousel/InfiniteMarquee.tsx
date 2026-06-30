import React from 'react';
// 1. Importamos o componente de Imagem otimizado do Next.js
import Image from 'next/image';

interface MarqueeItem {
  id: number;
  imageUrl: string;
  altText: string;
}

const SAMPLE_IMAGES: MarqueeItem[] = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=200&fit=crop',
    altText: 'Card 1',
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=300&h=200&fit=crop',
    altText: 'Card 2',
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1618005198143-e528346d9a59?w=300&h=200&fit=crop',
    altText: 'Card 3',
  },
  {
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=300&h=200&fit=crop',
    altText: 'Card 4',
  },
  {
    id: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300&h=200&fit=crop',
    altText: 'Card 5',
  },
];

export function InfiniteMarquee() {
  const doubleImages = [...SAMPLE_IMAGES, ...SAMPLE_IMAGES];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8 select-none">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="flex w-max flex-row-reverse gap-6 animate-marquee-custom hover:[animation-play-state:paused]">
        {doubleImages.map((item, index) => (
          /* 
            Mantemos a div pai relativa para que o preenchimento da imagem 
            com a propriedade 'fill' funcione perfeitamente.
          */
          <div
            key={`${item.id}-${index}`}
            className="relative w-56 h-36 flex-shrink-0 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-xs transition-shadow duration-300 hover:shadow-md"
          >
            {/* 2. Substituído por <Image /> com propriedades de otimização */}
            < Image
              src={item.imageUrl}
              alt={item.altText}
              fill
              sizes="(max-width: 768px) 224px, 224px"
              className="object-cover pointer-events-none"
              priority={
                index < 4
              } /* Carrega os primeiros cards mais rápido para melhorar o LCP */
            />
          </div>
        ))}
      </div>
    </div>
  );
}

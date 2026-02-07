export interface Testimonial {
  name: string;
  initials: string;
  comment: string;
  rating: number;
  color: string;
  featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Felipe Fuentes',
    initials: 'FF',
    comment: 'Excelente lugar, me faltaba una pieza que no encontré en ningún lado, ni siquiera en sodimac donde compré la silla originalmente. Así que recomendadísimo.',
    rating: 5,
    color: 'orange',
    featured: true
  },
  {
    name: 'Natacha Scholtz',
    initials: 'NS',
    comment: 'Excelente atención! Tienen harta variedad de productos',
    rating: 5,
    color: 'blue'
  },
  {
    name: 'Perla Chamy',
    initials: 'PC',
    comment: 'Tienen variedad de productos, fácil de llegar y con estacionamiento',
    rating: 5,
    color: 'green'
  },
  {
    name: 'Lazaro Pulpeiro',
    initials: 'LP',
    comment: 'Mucha variedad, encontré lo que necesitaba. Lo recomiendo',
    rating: 5,
    color: 'purple'
  },
  {
    name: 'Sofia Scholtz Chamy',
    initials: 'SC',
    comment: 'Excelentes precios y buena atención!',
    rating: 5,
    color: 'pink'
  }
];

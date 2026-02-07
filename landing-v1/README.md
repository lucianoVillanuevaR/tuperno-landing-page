# Tuperno - Landing Page

Prototipo Landing page para Tuperno, ferretería especializada en pernos y fijaciones en San Pedro de la Paz, Región del Biobío, Chile.

## Inicio Rápido

```bash
npm install
npm run dev
```

Abrir navegador en: http://localhost:4321

## Tecnologías

- **Astro 5.16.7** - Framework web moderno
- **Tailwind CSS v4** - Framework de estilos
- **TypeScript** - Tipado estático

## Estructura del Proyecto

```
landing-v1/
├── public/
│   └── images/
│       ├── logo principal.jpeg
│       ├── pernos.png
│       └── TuPernoLocal.png
├── src/
│   ├── components/
│   │   ├── SocialBar.astro          # Barra superior con redes sociales
│   │   ├── Hero.astro               # Sección principal con CTAs
│   │   ├── ProductCarousel.astro    # Carousel de publicaciones sociales
│   │   ├── Features.astro           # Beneficios (Stock, Atención, Precios)
│   │   ├── ContactForm.astro        # Formulario con WhatsApp
│   │   ├── Testimonials.astro       # Testimonios de clientes
│   │   └── CTAFooter.astro          # Footer con contacto y mapa
│   ├── config/
│   │   ├── constants.ts             # Contacto, horarios, redes sociales
│   │   └── testimonials.ts          # Datos de testimonios
│   ├── layouts/
│   │   └── Layout.astro             # Layout con SEO
│   ├── pages/
│   │   └── index.astro              # Página principal
│   └── styles/
│       └── global.css               # Estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor de desarrollo (http://localhost:4321) |
| `npm run build` | Generar build de producción en `./dist/` |
| `npm run preview` | Previsualizar build de producción |

## Configuración

### Información de Contacto

Archivo: `src/config/constants.ts`

```typescript
export const CONTACT_INFO = {
  phone: '+56951997763',
  phoneDisplay: '+56 9 5199 7763',
  email: 'tupernorw90@gmail.com',
  whatsappUrl: 'https://wa.me/56951997763',
  address: {
    street: 'Av. Pedro Aguirre Cerda, Pje. Noventa 1973',
    city: 'San Pedro de la Paz',
    region: 'Bío Bío',
    postalCode: '4130010',
    country: 'Chile'
  },
  mapsUrl: 'https://www.google.com/maps/...'
};
```

### Horarios de Atención

```typescript
export const BUSINESS_HOURS = {
  weekdays: 'Lun - Vie: 9:00 - 19:00',
  saturday: 'Sábado: 9:00 - 14:00',
  sunday: 'Cerrado'
};
```

### Redes Sociales

```typescript
export const SOCIAL_MEDIA = {
  facebook: 'https://www.facebook.com/Tuperno',
  instagram: 'https://www.instagram.com/tuperno_90/',
  instagramHandle: '@tuperno_90'
};
```

### Colores de Marca

```typescript
export const THEME_COLORS = {
  black: '#121212',
  red: '#B71C1C',
  yellow: '#FBC02D',
  primary: '#B71C1C',
  secondary: '#FBC02D'
};
```

## Componentes

### Hero.astro
Sección principal con logo, título, descripción y botones de acción (WhatsApp y ubicación).

### ProductCarousel.astro
Carousel automático que muestra publicaciones de Instagram y Facebook. Rotación cada 5 segundos, pausa al hover.

### Features.astro
Tres beneficios principales: Stock Completo, Atención Rápida, Mejores Precios.

### ContactForm.astro
Formulario con validación que redirige a WhatsApp con los datos ingresados.
- Validación en tiempo real
- Campos: nombre (requerido), email (requerido), teléfono (opcional)

### Testimonials.astro
Muestra testimonios de clientes con sistema de destacados.

Datos en: `src/config/testimonials.ts`

```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Nombre Cliente',
    initials: 'NC',
    comment: 'Comentario del cliente',
    rating: 5,
    color: 'orange',
    featured: true  // Destacar en la parte superior
  }
];
```

### CTAFooter.astro
Footer con información de contacto, mapa de Google Maps y botones de acción.

## Modificaciones Comunes

### Cambiar Logo
Reemplazar: `public/images/logo principal.jpeg`
Tamaño recomendado: 200x50px, JPEG

### Cambiar Publicaciones del Carousel
Archivo: `src/components/ProductCarousel.astro`

Para Instagram, reemplazar el código del `<blockquote>`:
1. Ir a Instagram, abrir publicación
2. Click en "..." y seleccionar "Insertar"
3. Copiar código y reemplazar en el componente

Para Facebook, actualizar URL del iframe:
1. Ir a publicación de Facebook
2. Click en "..." y seleccionar "Insertar"
3. Copiar URL y actualizar en el componente

### Agregar/Modificar Testimonios
Editar: `src/config/testimonials.ts`

```typescript
{
  name: 'Nuevo Cliente',
  initials: 'NC',
  comment: 'Excelente servicio',
  rating: 5,
  color: 'blue', // orange, blue, green, purple, pink
  featured: false
}
```

### Actualizar Horarios
Editar: `src/config/constants.ts`

### Cambiar Mapa de Ubicación
Editar URL del iframe en: `src/components/CTAFooter.astro`

1. Ir a Google Maps
2. Buscar ubicación
3. Click en "Compartir" > "Insertar un mapa"
4. Copiar código iframe y reemplazar

## SEO

El archivo `src/layouts/Layout.astro` incluye:
- Meta tags optimizados
- Open Graph para redes sociales
- Schema.org markup para Google
- Favicon y meta tags de dispositivos

Para modificar:
- Título: Editar en `Layout.astro`
- Descripción: Editar en `Layout.astro`
- Keywords: Editar en `Layout.astro`

## Despliegue

### Build de Producción

```bash
npm run build
```

Genera archivos estáticos en `./dist/`

### Hosting Recomendado

- **Vercel**: Conexión con Git, deploy automático
- **Netlify**: Deploy por arrastre de carpeta o Git
- **GitHub Pages**: Hosting gratuito con GitHub Actions

#### Deploy en Vercel

1. Conectar repositorio en vercel.com
2. Framework Preset: Astro
3. Deploy automático en cada push

#### Deploy en Netlify

1. Arrastrar carpeta `dist/` a netlify.com/drop
2. O conectar repositorio Git

#### Deploy Manual

1. Ejecutar `npm run build`
2. Subir contenido de `dist/` a servidor via FTP/SFTP
3. Apuntar dominio a la carpeta

## Responsive

El sitio es completamente responsive:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Breakpoints de Tailwind:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px

## Mantenimiento

### Actualizar Dependencias

```bash
npm update
```

### Verificar Errores

```bash
npx astro check
```

## Soporte

Para problemas o dudas:
- Documentación de Astro: https://docs.astro.build
- Documentación de Tailwind: https://tailwindcss.com/docs

## Licencia

Proyecto privado para TuPerno

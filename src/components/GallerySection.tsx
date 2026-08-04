import { Camera } from 'lucide-react';

const photos = [
  { src: 'https://images.pexels.com/photos/262663/pexels-photo-262663.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'European hospital', span: 'lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Nurse with patient', span: '' },
  { src: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Healthcare team', span: '' },
  { src: 'https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Europe canal', span: '' },
  { src: 'https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'European street', span: 'lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Nurse portrait', span: '' },
  { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Modern apartment', span: '' },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">A Glimpse</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">
            Life at <span className="text-gradient">Work & Beyond</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A peek into the hospitals you'll work in and the life you'll live in West Europe.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map(({ src, alt, span }, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${span}`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <Camera className="w-4 h-4" />
                  {alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Star, Menu, X } from 'lucide-react';
import { menuItems, MenuItem } from '@/lib/menu';

export default function SahleShiroBet() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Fasting' | 'Non-Fasting'>('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Auto-scroll carousel
  useEffect(() => {
    const carousel = document.getElementById('food-carousel');
    if (!carousel) return;

    let scrollAmount = 0;
    const interval = setInterval(() => {
      scrollAmount += 2.5;
      carousel.scrollLeft = scrollAmount;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth - 100) scrollAmount = 0;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center text-3xl">🍲</div>
            <h1 className="text-3xl font-bold text-orange-500">Sahle Shiro Bet</h1>
          </div>

          <div className="hidden md:flex gap-8 text-lg">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#menu" className="hover:text-orange-500">Menu</a>
            <a href="#gallery" className="hover:text-orange-500">Gallery</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </div>

          <a href="tel:0941513286" className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-medium">
            <Phone size={20} /> 0941 513 286
          </a>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-24 pb-16 text-center bg-gradient-to-br from-gray-900 to-black">
        <h2 className="text-6xl font-bold mb-4">Sahle Shiro Bet</h2>
        <p className="text-2xl text-orange-500">Authentic Ethiopian Food</p>
      </section>

      {/* Carousel */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6">Popular Dishes</h3>
          <div id="food-carousel" className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
            {menuItems.slice(0, 8).map(item => (
              <div key={item.id} onClick={() => setSelectedItem(item)} className="min-w-[260px] card cursor-pointer">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-3xl" />
                <div className="p-4">
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-orange-500">ETB {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section with Tabs */}
      <section id="menu" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-5xl font-bold text-center mb-10">Our Menu</h3>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {['All', 'Fasting', 'Non-Fasting'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-3 rounded-2xl font-medium transition ${
                  activeCategory === cat 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                onClick={() => setSelectedItem(item)}
                className="card group cursor-pointer hover:-translate-y-2 transition-all"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-52 object-cover rounded-t-3xl group-hover:scale-105 transition" 
                />
                <div className="p-5">
                  <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                  <p className="text-orange-500 font-semibold mt-2">ETB {item.price}</p>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Smaller Cards */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-5xl font-bold text-center mb-12">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {menuItems.map((item, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-3xl">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Sahle Shiro Bet</h2>
          <p className="text-2xl mb-8">📞 0941 513 286</p>
          <p className="text-gray-400">Ayer tena, Addis Ababa • Open Daily 1:00 AM - 10:00 PM</p>
        </div>
      </footer>

            {/* Food Detail Modal */}
            {selectedItem && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-3xl max-w-lg w-full overflow-hidden relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition"
            >
              ✕
            </button>

            <img 
              src={selectedItem.image} 
              alt={selectedItem.name} 
              className="w-full h-72 object-cover" 
            />

            <div className="p-8">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold">{selectedItem.name}</h3>
                <p className="text-4xl font-bold text-orange-500">ETB {selectedItem.price}</p>
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed">{selectedItem.description}</p>

              <div className="mt-6">
                <p className="font-semibold text-gray-400">Ingredients:</p>
                <p className="text-gray-300">{selectedItem.ingredients}</p>
              </div>

              <div className="flex gap-4 mt-10">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-4 border border-gray-600 rounded-2xl font-medium hover:bg-gray-800 transition"
                >
                  Cancel
                </button>
                
                <button 
                  onClick={() => {
                    alert(`✅ Thank you!\n\nPlease call 0941 513 286 to order ${selectedItem.name}`);
                    setSelectedItem(null);
                  }}
                  className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl font-bold text-lg transition"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
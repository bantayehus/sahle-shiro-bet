
// 'use client';
// import { useState, useEffect } from 'react';
// import { Phone, Menu, X } from 'lucide-react';
// import { menuItems, MenuItem } from '@/lib/menu';

// export default function SahleShiroBet() {
//   const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState<'All' | 'Fasting' | 'Non-Fasting'>('All');

//   const filteredItems = activeCategory === 'All' 
//     ? menuItems 
//     : menuItems.filter(item => item.category === activeCategory);

//   // Auto-scroll carousel
//   useEffect(() => {
//     const carousel = document.getElementById('food-carousel');
//     if (!carousel) return;

//     let scrollAmount = 0;
//     const interval = setInterval(() => {
//       scrollAmount += 2.5;
//       carousel.scrollLeft = scrollAmount;
//       if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth - 100) scrollAmount = 0;
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-950 text-gray-100">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 sm:w-11 sm:h-11 bg-orange-500 rounded-full flex items-center justify-center text-2xl">🍲</div>
//             <h1 className="text-2xl sm:text-3xl font-bold text-orange-500">Sahle Shiro Bet</h1>
//           </div>

//           <div className="hidden md:flex gap-8 text-base">
//             <a href="#home" className="hover:text-orange-500">Home</a>
//             <a href="#menu" className="hover:text-orange-500">Menu</a>
//             <a href="#gallery" className="hover:text-orange-500">Gallery</a>
//             <a href="#contact" className="hover:text-orange-500">Contact</a>
//           </div>

//           <a 
//             href="tel:0941513286" 
//             className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-medium text-sm"
//           >
//             <Phone size={18} /> Order Now 0941 513 286
//           </a>

//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section id="home" className="pt-20 pb-12 md:pt-24 md:pb-20 text-center bg-gradient-to-br from-gray-900 to-black px-4">
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">Sahle Shiro Bet</h2>
//         <p className="text-lg sm:text-xl md:text-2xl text-orange-500">Authentic Ethiopian Food</p>
//       </section>

//       {/* Carousel */}
//       <section className="py-8 md:py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-2xl md:text-4xl font-bold mb-6 px-2">Popular Dishes</h3>
//           <div id="food-carousel" className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4">
//             {menuItems.slice(0, 8).map(item => (
//               <div 
//                 key={item.id} 
//                 onClick={() => setSelectedItem(item)} 
//                 className="min-w-[240px] sm:min-w-[260px] md:min-w-[300px] card cursor-pointer flex-shrink-0"
//               >
//                 <img 
//                   src={item.image} 
//                   alt={item.name} 
//                   className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-t-3xl" 
//                 />
//                 <div className="p-4">
//                   <h4 className="font-bold text-base sm:text-lg">{item.name}</h4>
//                   <p className="text-orange-500 font-semibold">ETB {item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Menu Section */}
//       <section id="menu" className="py-12 md:py-20 bg-gray-900 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-3xl md:text-5xl font-bold text-center mb-8">Our Menu</h3>

//           <div className="flex justify-center gap-3 mb-10 flex-wrap">
//             {['All', 'Fasting', 'Non-Fasting'].map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat as any)}
//                 className={`px-6 sm:px-8 py-3 rounded-2xl font-medium transition text-sm sm:text-base ${
//                   activeCategory === cat 
//                     ? 'bg-orange-500 text-white' 
//                     : 'bg-gray-800 hover:bg-gray-700'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
//             {filteredItems.map(item => (
//               <div 
//                 key={item.id} 
//                 onClick={() => setSelectedItem(item)}
//                 className="card group cursor-pointer hover:-translate-y-1 transition-all"
//               >
//                 <img 
//                   src={item.image} 
//                   alt={item.name} 
//                   className="w-full h-48 sm:h-52 object-cover rounded-t-3xl group-hover:scale-105 transition" 
//                 />
//                 <div className="p-5">
//                   <h4 className="font-bold text-base sm:text-lg leading-tight">{item.name}</h4>
//                   <p className="text-orange-500 font-semibold mt-2">ETB {item.price}</p>
//                   <p className="text-sm text-gray-400 mt-2 line-clamp-2">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       <footer id="contact" className="bg-black py-12 md:py-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Sahle Shiro Bet</h2>
//           <a 
//             href="tel:0941513286" 
//             className="text-3xl md:text-4xl mb-6 inline-block hover:text-orange-500"
//           >
//             📞 0941 513 286
//           </a>
//           <p className="text-gray-400">ayer tena, Addis Ababa • Daily 10:00 AM - 10:00 PM</p>
//         </div>
//       </footer>

//       {/* Modal */}
//       {selectedItem && (
//         <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-900 rounded-3xl max-w-md w-full overflow-hidden relative">
//             <button
//               onClick={() => setSelectedItem(null)}
//               className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition"
//             >
//               ✕
//             </button>

//             <img 
//               src={selectedItem.image} 
//               alt={selectedItem.name} 
//               className="w-full h-64 sm:h-72 object-cover" 
//             />

//             <div className="p-6 sm:p-8">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-2xl sm:text-3xl font-bold">{selectedItem.name}</h3>
//                 <p className="text-3xl sm:text-4xl font-bold text-orange-500">ETB {selectedItem.price}</p>
//               </div>

//               <p className="text-gray-300 mt-4 leading-relaxed">{selectedItem.description}</p>

//               <div className="flex gap-3 mt-8">
//                 <button 
//                   onClick={() => setSelectedItem(null)}
//                   className="flex-1 py-4 border border-gray-600 rounded-2xl font-medium"
//                 >
//                   Cancel
//                 </button>
                
//                 <button 
//                   onClick={() => {
//                     alert(`✅ Thank you!\n\nPlease call 0941 513 286 to order ${selectedItem.name}`);
//                     setSelectedItem(null);
//                   }}
//                   className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl font-bold text-lg transition"
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-orange-500 rounded-full flex items-center justify-center text-2xl">🍲</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-500">Sahle Shiro Bet</h1>
          </div>

          <div className="hidden md:flex gap-8 text-base">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#menu" className="hover:text-orange-500">Menu</a>
            <a href="#gallery" className="hover:text-orange-500">Gallery</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </div>

          {/* Navbar Call Button */}
          <a 
            href="tel:0941513286" 
            className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-medium text-sm"
          >
            <Phone size={18} /> 0941 513 286
          </a>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-20 pb-12 md:pt-24 md:pb-20 text-center bg-gradient-to-br from-gray-900 to-black px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">Sahle Shiro Bet</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-orange-500">Authentic Ethiopian Food</p>
      </section>

      {/* Carousel */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 px-2">Popular Dishes</h3>
          <div id="food-carousel" className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4">
            {menuItems.slice(0, 8).map(item => (
              <div 
                key={item.id} 
                onClick={() => setSelectedItem(item)} 
                className="min-w-[240px] sm:min-w-[260px] md:min-w-[300px] card cursor-pointer flex-shrink-0"
              >
                <img src={item.image} alt={item.name} className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-t-3xl" />
                <div className="p-4">
                  <h4 className="font-bold text-base sm:text-lg">{item.name}</h4>
                  <p className="text-orange-500 font-semibold">ETB {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12 md:py-20 bg-gray-900 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-8">Our Menu</h3>

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {['All', 'Fasting', 'Non-Fasting'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 sm:px-8 py-3 rounded-2xl font-medium transition text-sm sm:text-base ${
                  activeCategory === cat 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                onClick={() => setSelectedItem(item)}
                className="card group cursor-pointer hover:-translate-y-1 transition-all"
              >
                <img src={item.image} alt={item.name} className="w-full h-48 sm:h-52 object-cover rounded-t-3xl group-hover:scale-105 transition" />
                <div className="p-5">
                  <h4 className="font-bold text-base sm:text-lg leading-tight">{item.name}</h4>
                  <p className="text-orange-500 font-semibold mt-2">ETB {item.price}</p>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-10">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {menuItems.map((item, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-3xl">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Sahle Shiro Bet</h2>
          <a 
            href="tel:0941513286" 
            className="text-3xl md:text-4xl mb-6 inline-block hover:text-orange-500"
          >
            📞 0941 513 286
          </a>
          <p className="text-gray-400">Ayer Tena, Addis Ababa • Daily 10:00 AM - 10:00 PM</p>
        </div>
      </footer>

      {/* Modal with Direct Call */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-3xl max-w-md w-full overflow-hidden relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl transition"
            >
              ✕
            </button>

            <img 
              src={selectedItem.image} 
              alt={selectedItem.name} 
              className="w-full h-64 sm:h-72 object-cover" 
            />

            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl sm:text-3xl font-bold">{selectedItem.name}</h3>
                <p className="text-3xl sm:text-4xl font-bold text-orange-500">ETB {selectedItem.price}</p>
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed">{selectedItem.description}</p>

              <div className="flex gap-3 mt-8">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-4 border border-gray-600 rounded-2xl font-medium"
                >
                  Cancel
                </button>
                
                {/* Direct Call Button */}
                <a 
                  href="tel:0941513286"
                  className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl font-bold text-lg text-center flex items-center justify-center gap-2"
                >
                  <Phone size={22} />
                  Call to Order
                </a>
              </div>

              <p className="text-center text-sm text-gray-400 mt-4">0941 513 286</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
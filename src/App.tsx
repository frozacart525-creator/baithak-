/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Star, Utensils, Coffee, Car, Users, Menu as MenuIcon, X, ChevronRight, MessageCircle, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-amber-700' : 'text-white'}`}>
              The Baithak
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-stone-200'}`}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">
                Book a Table
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`${isScrolled ? 'text-stone-800' : 'text-white'}`}>
                {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-100 shadow-lg absolute w-full"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-stone-50 rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=2000" 
            alt="Indian Dhaba Food" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block text-amber-400 font-medium tracking-wider uppercase mb-4 text-sm md:text-base"
          >
            Welcome to Daltonganj's Finest
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Taste the Authentic <span className="text-amber-500 italic">Dhaba</span> Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light"
          >
            Delicious food, fast service, and a perfect place for family & friends at The Baithak.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#menu" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
              View Menu <ChevronRight size={18} className="ml-1" />
            </a>
            <a href="tel:+910000000000" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center">
              <Phone size={18} className="mr-2" /> Call Now
            </a>
            <a href="#location" className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all underline decoration-amber-500/50 underline-offset-4 flex items-center justify-center">
              <MapPin size={18} className="mr-2" /> Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              className="relative"
            >
              <div className="absolute -inset-4 bg-amber-100 rounded-2xl transform rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000" 
                alt="Restaurant Interior" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-stone-800">4.9/5</span>
                </div>
                <p className="text-sm text-stone-600 font-medium">"The best dhaba experience in Daltonganj!"</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
            >
              <h4 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Story</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">A Cozy Dhaba-Style Haven</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Welcome to The Baithak Restaurant, where traditional Indian dhaba flavors meet modern comfort. Located in the heart of Medininagar, we pride ourselves on serving authentic, mouth-watering dishes that bring people together.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Whether you're craving spicy Indian meals, quick fast food, or a relaxing cup of coffee, our family-friendly environment and fast service ensure a memorable dining experience for travelers and locals alike.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Good Food</h4>
                    <p className="text-sm text-stone-500">Authentic & fresh</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Fast Service</h4>
                    <p className="text-sm text-stone-500">Hot & ready</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Family Friendly</h4>
                    <p className="text-sm text-stone-500">Cozy environment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Prime Location</h4>
                    <p className="text-sm text-stone-500">Easy to find</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h4 variants={fadeIn} initial="initial" whileInView="whileInView" className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Menu</motion.h4>
            <motion.h2 variants={fadeIn} initial="initial" whileInView="whileInView" className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">Popular Delights</motion.h2>
            <motion.p variants={fadeIn} initial="initial" whileInView="whileInView" className="text-stone-600 text-lg">Discover our most loved dishes, prepared with authentic spices and fresh ingredients.</motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Special Indian Thali",
                desc: "Authentic dhaba style complete meal with dal, sabzi, roti, and rice.",
                price: "â¹199",
                img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Hakka Noodles",
                desc: "Wok-tossed noodles with fresh vegetables and secret sauces.",
                price: "â¹120",
                img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Baithak Special Coffee",
                desc: "Rich, aromatic brewed coffee perfect for conversations.",
                price: "â¹60",
                img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Crispy Burger & Fries",
                desc: "Juicy patty with fresh lettuce, cheese, and crispy golden fries.",
                price: "â¹150",
                img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-stone-100">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-amber-600 shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">{item.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center">
              View Full Menu <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h4 variants={fadeIn} initial="initial" whileInView="whileInView" className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-2">What We Offer</motion.h4>
            <motion.h2 variants={fadeIn} initial="initial" whileInView="whileInView" className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <Utensils size={32} />, title: "Dine-In", desc: "Enjoy a warm, rustic ambiance perfect for family dinners and meetups." },
              { icon: <Car size={32} />, title: "Drive-Through", desc: "Quick and convenient pickup for travelers on the go." },
              { icon: <Send size={32} />, title: "Delivery", desc: "Hot and fresh food delivered right to your doorstep." },
              { icon: <Users size={32} />, title: "Family Seating", desc: "Spacious seating arrangements designed for large family gatherings." }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-2xl border border-stone-700 hover:border-amber-500/50 transition-colors text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-700 text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-stone-900 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{service.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h4 variants={fadeIn} initial="initial" whileInView="whileInView" className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Testimonials</motion.h4>
            <motion.h2 variants={fadeIn} initial="initial" whileInView="whileInView" className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">What Our Guests Say</motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Rahul Singh", text: "Best food in the town! The authentic dhaba taste is just amazing. Highly recommend the special thali.", role: "Local Guide" },
              { name: "Priya Sharma", text: "Fast service and delicious taste. We stopped here during our road trip and it was the best decision.", role: "Traveler" },
              { name: "Amit Kumar", text: "Great place for family dining. The ambiance is cozy and the staff is very polite. Will visit again soon.", role: "Regular Customer" }
            ].map((review, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative">
                <div className="text-amber-400 flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">{review.name}</h4>
                    <p className="text-xs text-stone-500">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <motion.h4 variants={fadeIn} initial="initial" whileInView="whileInView" className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Gallery</motion.h4>
              <motion.h2 variants={fadeIn} initial="initial" whileInView="whileInView" className="text-4xl md:text-5xl font-serif font-bold text-stone-800">A Glimpse of The Baithak</motion.h2>
            </div>
            <motion.button variants={fadeIn} initial="initial" whileInView="whileInView" className="mt-6 md:mt-0 text-amber-600 font-medium hover:text-amber-700 flex items-center">
              View Instagram <ChevronRight size={18} />
            </motion.button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <motion.div variants={fadeIn} className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800" alt="Restaurant Ambience" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </motion.div>
            <motion.div variants={fadeIn} className="relative rounded-2xl overflow-hidden group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" alt="Food Prep" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div variants={fadeIn} className="relative rounded-2xl overflow-hidden group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div variants={fadeIn} className="col-span-2 relative rounded-2xl overflow-hidden group h-48 md:h-64">
              <img src="https://images.unsplash.com/photo-1590846406792-0adc7f927f1a?auto=format&fit=crop&q=80&w=800" alt="Customer Experience" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form & Info */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <h4 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">Get in Touch</h4>
              <h2 className="text-4xl font-serif font-bold text-stone-800 mb-8">Visit or Contact Us</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-amber-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">Location</h4>
                    <p className="text-stone-600">Bye pass Road, Ranchi Road, South Redma,<br/>Medininagar, Jharkhand 822102</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-amber-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">Phone</h4>
                    <p className="text-stone-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-amber-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">Opening Hours</h4>
                    <p className="text-stone-600">Mon - Sun: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              <form className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-stone-800 mb-6 font-serif">Send us a Message</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow" />
                  <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow resize-none"></textarea>
                  <button type="button" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-md border border-stone-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.563811568461!2d84.0621453!3d24.0340325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c0b0000000001%3A0x1234567890abcdef!2sMedininagar%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Restaurant Location"
              ></iframe>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm">
                 <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-stone-800 text-center py-3 rounded-lg shadow-lg font-bold hover:bg-stone-50 transition-colors border border-stone-100">
                    Get Directions
                 </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">The Baithak</h3>
              <p className="mb-4 max-w-xs">Taste the authentic dhaba experience with delicious food and fast service in Daltonganj.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a></li>
                <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-amber-500 shrink-0 mt-1" />
                  <span>Bye pass Road, Ranchi Road, South Redma, Medininagar, Jharkhand 822102</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-amber-500 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-amber-500 shrink-0" />
                  <span>Mon - Sun: 10:00 AM - 11:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} The Baithak Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a 
          href="tel:+919876543210" 
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all"
          aria-label="Call Now"
        >
          <Phone size={24} />
        </a>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={28} />
        </a>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '../components/Navigation';

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Replace these URLs with your exact Google Maps embed and link when ready.
  const MAP_EMBED_URL = 'https://www.google.com/maps?q=Kenyatta+Avenue,+Nairobi&output=embed';
  const MAP_LINK = 'https://www.google.com/maps/place/Kenyatta+Avenue,+Nairobi';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendFormToWhatsApp = () => {
    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert('Please fill name, phone and message before sending.');
      return;
    }

    const body = `New contact form submission:\n\nName: ${name}\nEmail: ${email || '-'}\nPhone: ${phone}\nMessage: ${message}\n\nMap: ${MAP_LINK}`;
    const url = `https://wa.me/254101125353?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  };

  const handleQuickWhatsApp = () => {
    const body = "Hi! I'd like to get more information about your products and services.";
    const whatsappUrl = `https://wa.me/254101125353?text=${encodeURIComponent(body)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Reach out — we respond fast on WhatsApp. Or use the form and we'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Map + Info Cards */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg bg-card">
              <iframe
                title="Our Location"
                src={MAP_EMBED_URL}
                className="w-full h-80 border-0"
                loading="lazy"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Kenyatta Avenue</div>
                  <div className="text-sm text-muted-foreground">Avenue House, 4th Floor, Nairobi</div>
                </div>
                <a href={MAP_LINK} target="_blank" rel="noreferrer" className="text-primary underline">Open in Google Maps</a>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">+254101125353</p>
                <p className="text-muted-foreground">Call us for immediate assistance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">info@centstoresKE.co.ke</p>
                <p className="text-muted-foreground">Send us your inquiries</p>
              </CardContent>
            </Card>
          </div>

          {/* Right: Form & Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="px-3 py-2 rounded-md border bg-transparent w-full"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email (optional)"
                    className="px-3 py-2 rounded-md border bg-transparent w-full"
                    type="email"
                  />
                </div>

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="px-3 py-2 rounded-md border bg-transparent w-full"
                />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  rows={5}
                  className="px-3 py-2 rounded-md border bg-transparent w-full"
                />

                <div className="flex gap-3">
                  <Button onClick={sendFormToWhatsApp} className="bg-green-600">Send Message</Button>
                  <Button variant="outline" onClick={handleQuickWhatsApp}>Chat on WhatsApp</Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              Prefer calling? <a href="tel:+254101125353" className="text-primary underline">+254101125353</a>
            </div>
          </div>
        </div>

        {/* Footer section similar to provided image */}
        <footer className="mt-16 border-t border-muted/40 pt-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-muted-foreground">
              <div>
                <h4 className="text-base font-semibold text-white mb-3">Products</h4>
                <ul className="space-y-2">
                  <li><a className="text-primary" href="#">iPhone</a></li>
                  <li><a className="text-primary" href="#">AirPods</a></li>
                  <li><a className="text-primary" href="#">iPad</a></li>
                  <li><a className="text-primary" href="#">Mac</a></li>
                  <li><a className="text-primary" href="#">Accessories</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-3">Service</h4>
                <ul className="space-y-2">
                  <li><a className="text-primary" href="#">Shop</a></li>
                  <li><a className="text-primary" href="#">Repairs</a></li>
                  <li><a className="text-primary" href="#">Apple Warranty</a></li>
                  <li><a className="text-primary" href="#">Trade-ins</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-3">Top Sellers</h4>
                <ul className="space-y-2">
                  <li><a className="text-primary" href="#">iPhone 14 Pro Max</a></li>
                  <li><a className="text-primary" href="#">AirPods Pro</a></li>
                  <li><a className="text-primary" href="#">M2 MacBook Pro</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a className="text-primary" href="#">About us</a></li>
                  <li><a className="text-primary" href="#">Shop for business</a></li>
                  <li><a className="text-primary" href="#">Work with us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-3">Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+254101125353</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>info@centstoresKE.co.ke</span>
                  </div>
                </div>
                <div className="mt-4">
                  <img src="https://i.imgur.com/9Qm4YQG.png" alt="LIPA NA M-PESA" className="w-36 rounded-md shadow-sm" />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-muted-foreground text-sm">
              © {new Date().getFullYear()} Apple Products Kenya — All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
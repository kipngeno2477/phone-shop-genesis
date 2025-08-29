import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '../components/Navigation';

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to get more information about your products and services.";
    const whatsappUrl = `https://wa.me/254720209187?text=${encodeURIComponent(message)}`;
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
            Get in touch with us for any questions or support you need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">+254 720 209 187</p>
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
                <p className="text-lg">info@centsoreske.co.ke</p>
                <p className="text-muted-foreground">Send us your inquiries</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Kenyatta Avenue</p>
                <p className="text-muted-foreground">Avenue house 4th floor, Nairobi</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ready to make a purchase or have questions? Contact us directly through WhatsApp 
                  for the fastest response.
                </p>
                
                <Button 
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Chat on WhatsApp
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Or call us directly:</p>
                  <a 
                    href="tel:+254720209187" 
                    className="text-primary font-medium hover:underline"
                  >
                    +254 720 209 187
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                    <p className="text-sm text-muted-foreground">Kenyatta Avenue, Nairobi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
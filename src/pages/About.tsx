import React, { useState } from 'react';
import { Shield, Users, Award, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';

const About = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About centsoreske
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are an independent company specializing in the sale and repair of all Apple Products.
            Your trusted partner for premium smartphones in Kenya.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-primary/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">User-First Approach</h3>
            <p className="text-muted-foreground">
              All Apple products are made with a user-first approach enabling them to have top-notch capabilities with the simplest usability.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-primary/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
            <p className="text-muted-foreground">
              We believe customer Service/Impression is among the most important things to a brand and we strive for the best Customer Service/Impression.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-primary/20 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Passion for Apple</h3>
            <p className="text-muted-foreground">
              We are driven by the love for everything Apple. We don't consider what we do a job or service but a passion.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
          <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To provide authentic, high-quality smartphones and exceptional service to our customers, 
            making premium technology accessible to everyone in Kenya.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">+254 720 209 187</p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">info@centsoreske.co.ke</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
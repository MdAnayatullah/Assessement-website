import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { Map } from '../components/contact/Map';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Get in touch with our team
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                  <span className="text-gray-600">info@anayatwebdevco.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-indigo-600" />
                  <span className="text-gray-600">+91 1234567890</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                  <span className="text-gray-600">HSR Layout Sector 7 , Bangalore, Karnataka</span>
                </div>
              </div>
            </div>
            <Map />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
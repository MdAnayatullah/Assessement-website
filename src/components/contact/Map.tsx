import React from 'react';

export function Map() {
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Bangalore Location"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122473.49726214356!2d77.5778186472361!3d12.971598724976675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e2f8d5927d%3A0x127b7da9d6a4a401!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1702604947271!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

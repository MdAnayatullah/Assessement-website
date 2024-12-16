import React from 'react';

export function Map() {
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Office Location"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647834755411!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
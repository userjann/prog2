import React from 'react';

const gallery = () => {
  const sets = [
    { title: 'Set 1', subtitle: 'Title', description: 'Description' },
    { title: 'Set 2', subtitle: 'Title', description: 'Description' },
    { title: 'Set 3', subtitle: 'Title', description: 'Description' },
    { title: 'Set 4', subtitle: 'Title', description: 'Description' },
    { title: 'Set 5', subtitle: 'Title', description: 'Description' },
    { title: 'Set 6', subtitle: 'Title', description: 'Description' },
  ];

  return (
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Sets:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sets.map((set, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold">{set.title}</h3>
            <p className="text-gray-600 font-medium">{set.subtitle}</p>
            <p className="text-gray-500">{set.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default gallery;

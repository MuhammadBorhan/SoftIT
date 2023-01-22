import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="rounded-2xl h-48" src={item.image} alt="" />
      </div>
      <p className="capitalize text-yellow-400 text-xl mb-3">{item.category}</p>
      <h3 className="text-2xl text-white font-semibold capitalize mb-3">
        {item.name}
      </h3>
      <p className="text-base text-white max-w-md">{item.desc}</p>
      <div className="flex justify-between gap-4 mt-4">
        <a
          className="border-2 text-white rounded-full px-4 py-1"
          target="_blank"
          href={item.live}
        >
          Live
        </a>
        <a
          className="border-2 text-white rounded-full px-4 py-1"
          target="_blank"
          href={item.client}
        >
          Client
        </a>
        {item.server && (
          <a
            className="border-2 text-white rounded-full px-4 py-1"
            target="_blank"
            href={item.server}
          >
            Server
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;

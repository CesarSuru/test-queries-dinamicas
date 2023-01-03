import React from 'react';
import SpanSearch from './spanSearch';

const InputSearch = () => {
  return (
    <div className="flex invisible lg:visible lg:block hidden">
      <label className="relative block">
        <input
          className="w-44 text-sm bg-white rounded-lg border border-slate-400 py-1 pl-3 pr-10 focus:outline-none focus:border-[#50D1E2]"
          placeholder="Realice una búsqueda"
          type="text"
        />
        <SpanSearch />
      </label>
    </div>
  );
};

export default InputSearch;

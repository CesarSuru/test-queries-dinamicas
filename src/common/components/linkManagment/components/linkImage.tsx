import React from 'react';

const LinkManagement = ({ imagen }: any) => {
  return (
    <div
      className="mb-6 lg:mb-0"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="false">
      <div>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg hover:shadow-xl rounded-lg mb-6"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light">
          <img src={imagen} className="w-full" alt="" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkManagement;

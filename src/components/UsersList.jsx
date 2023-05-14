import React from 'react';

const UsersList = ({ children }) => {
  return (
    <section className="mb-8 lg:mb-10 flex justify-center items-center flex-wrap gap-8 lg:gap-10">
      {children}
    </section>
  );
};

export default UsersList;

import React, { useEffect, useState } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log(`New text`);
    return () => {};
  }, [language, text]);
  return <div></div>;
};

export default Convert;

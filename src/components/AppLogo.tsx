import React, { useState } from 'react';
import { DEFAULT_SOMLUUL_LOGO } from './defaultLogo.js';

interface AppLogoProps {
  src?: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({
  src,
  alt = 'SomLuul',
  className = 'w-10 h-10 rounded-xl object-contain',
  containerClassName = ''
}) => {
  const [hasError, setHasError] = useState(false);

  const isDefaultPath = !src || src.trim() === '' || src.includes('somluul_logo');
  const imageSrc = hasError || isDefaultPath ? DEFAULT_SOMLUUL_LOGO : src;

  return (
    <div className={`relative inline-flex items-center justify-center p-0.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 shadow-md shrink-0 overflow-hidden ${containerClassName}`}>
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} object-contain transition-transform duration-200`}
        referrerPolicy="no-referrer"
        onError={() => {
          if (!hasError) {
            setHasError(true);
          }
        }}
      />
    </div>
  );
};

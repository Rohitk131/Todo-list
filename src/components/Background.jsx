import React from 'react';

const BackgroundXO = ({
  plusColor = '#fb3a5d',
  backgroundColor = 'transparent',
  plusSize = 43,
  className,
  fade = true,
  style,
  ...props
}) => {
  const encodedPlusColor = encodeURIComponent(plusColor);

  const maskStyle = fade
    ? {
        maskImage: 'radial-gradient(circle, white 15%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(circle, white 15%, transparent 90%)',
      }
    : {};

  //  SVG taken from https://heropatterns.com/
  const backgroundStyle = {
    backgroundColor,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='${plusSize}' height='${plusSize}' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='${encodedPlusColor}' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    ...maskStyle,
    ...style,
  };

  return (
    <div
      className={`absolute inset-0 h-full w-full ${className}`}
      style={backgroundStyle}
      {...props}
    />
  );
};

export default BackgroundXO;

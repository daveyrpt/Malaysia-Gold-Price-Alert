// components/Image.jsx
export default function Image({ src, alt, className, width, height, fill }) {
    const assetUrl = src.startsWith('/') ? src : `/${src}`;
    
    if (fill) {
      return (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`absolute inset-0 w-full h-full ${className || ''}`}
        />
      );
    }
    
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }
const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
  
    const trimmedStr = str.substring(0, maxLength).trim();
  
    // Verificar si el último caracter es un espacio, si es así, eliminarlo
    if (trimmedStr.charAt(trimmedStr.length - 1) === ' ') {
      return trimmedStr.slice(0, -1) + '...';
    }
  
    return trimmedStr + '...';
  }
  export default truncateString
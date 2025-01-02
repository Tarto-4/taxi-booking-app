export const useToast = () => {
    const showToast = (message) => {
      alert(message); // Simplified for demonstration
    };
  
    return { showToast };
  };
  
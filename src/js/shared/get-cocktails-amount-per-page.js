function getDeviceType() {
    const userAgent = navigator.userAgent;
  
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
      return 'tablet';
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        userAgent
      )
    ) {
      return 'mobile';
    }
  
    return 'desktop';
  }

  export function getCocktailsAmountPerPage() {
    const userDevice = getDeviceType();
  
    switch (userDevice) {
      case 'mobile':
        return 3;
      case 'tablet':
        return 6;
      case 'desktop':
        return 9;
    }
  }
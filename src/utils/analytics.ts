export const trackEvent = (eventName: string, details?: Record<string, any>) => {
  console.log(`[Analytics Event Tracked]: ${eventName}`, details || '');
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, details);
  }
};

import { useEffect } from 'react';
import SocialLinks from '../../components/ui/socialLinks/SocialLinks';

function JoinUs() {
  useEffect(() => {
    // Load Eventbrite widget script
    const script = document.createElement('script');
    script.src = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize widget after script loads
      if (window.EBWidgets) {
        var exampleCallback = function() {
          console.log('Order complete!');
        };

        window.EBWidgets.createWidget({
          // Required
          widgetType: 'checkout',
          eventId: '1623749611799',
          iframeContainerId: 'eventbrite-widget-container-1623749611799',

          // Optional
          iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
          onOrderComplete: exampleCallback  // Method called when an order has successfully completed
        });
      }
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="site-container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <h1 className="heading-xl text-center">VA Next Event Coming Soon</h1>
      
      <div id="eventbrite-widget-container-1623749611799"></div>
      
      <h1 className="heading-xl text-center" style={{ paddingTop: '3rem', marginTop: '2rem', marginBottom: '2rem' }}>Connect with Us</h1>
      <SocialLinks size={50} />
    </div>
  );
}

export default JoinUs;
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
      
      <h1 className="heading-xl text-center" style={{ paddingTop: '0rem', marginTop: '2rem', marginBottom: '2rem' }}>Connect with Us</h1>
      <SocialLinks size={50} />

      <h1 className="heading-xl text-center" style={{ paddingTop: '4rem', marginTop: '2rem', marginBottom: '4rem' }}>Check Out Our Next Event</h1>
      <div id="eventbrite-widget-container-1623749611799" style={{ borderRadius: '10px', overflow: 'hidden' }}></div>

    </div>
  );
}

export default JoinUs;
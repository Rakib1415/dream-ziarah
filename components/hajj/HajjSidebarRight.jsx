"use client";

import { useEffect } from "react";

// import { useGetContentsByMenuContentIdQuery } from '@/features/content/contentApi';
// import { useParams } from 'next/navigation';
// import Script from 'next/script';


const HajjSidebarRight = () => {
//   const params = useParams()
//   const {data, isSuccess} = useGetContentsByMenuContentIdQuery(params.slug);

  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d894d0d4-5eab-4e15-821d-6770f0186810";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      
    };
    
  }, []);


  return (
    <>
    <div className="d-flex justify-end js-pin-content">
      <div className="w-360 lg:w-full d-flex flex-column items-center">
        <div class="bokunWidget" data-src="https://widgets.bokun.io/online-sales/d894d0d4-5eab-4e15-821d-6770f0186810/experience-calendar/828452"></div>
      </div>
    </div>
   {/* <Script src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d894d0d4-5eab-4e15-821d-6770f0186810" /> */}
     
    </>
  );
};

export default HajjSidebarRight;

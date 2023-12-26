"use client";
import { useGetContentsByMenuContentIdQuery } from '@/features/content/contentApi';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
// import Script from 'next/script';


const SidebarRight = () => {
  const params = useParams()
  const {data, isSuccess} = useGetContentsByMenuContentIdQuery(params.slug);
  useEffect(() => {
   
    const script = document.createElement("script");
    script.src =
      "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=aa4c5059-8d0b-43dc-8bd3-bac143537416";
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
      {
        isSuccess && (<div class="bokunWidget" data-src={data?.url}></div>)
      }
        
      </div>
    </div>
   
     {/* <Script src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=aa4c5059-8d0b-43dc-8bd3-bac143537416" /> */}
    </>
  );
};

export default SidebarRight;

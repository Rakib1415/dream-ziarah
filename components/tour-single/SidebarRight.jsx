"use client";
import { useGetContentsByMenuContentIdQuery } from '@/features/content/contentApi';
import { useParams } from 'next/navigation';


const SidebarRight = () => {
  const params = useParams()
  const {data, isSuccess} = useGetContentsByMenuContentIdQuery(params.slug);

  return (
   
    <div className="d-flex justify-end js-pin-content">
      <div  className="w-360 lg:w-full d-flex flex-column items-center">
      {
        isSuccess && (<div class="bokunWidget" data-src={data?.url}></div>)
      }
        
      </div>
    </div>
   
     
  );
};

export default SidebarRight;

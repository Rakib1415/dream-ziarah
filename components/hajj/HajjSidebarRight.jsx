"use client";


// import { useGetContentsByMenuContentIdQuery } from '@/features/content/contentApi';
// import { useParams } from 'next/navigation';



const HajjSidebarRight = () => {
//   const {data, isSuccess} = useGetContentsByMenuContentIdQuery(params.slug);
  // const [initialRender, setInitailRender] = useState(true);

  return (

    <div className="d-flex justify-end js-pin-content">
      <div  className="w-360 lg:w-full d-flex flex-column items-center">
        <div id="bokun" class="bokunWidget" data-src="https://widgets.bokun.io/online-sales/d894d0d4-5eab-4e15-821d-6770f0186810/experience-calendar/828452"></div>
      </div>
    </div>
   
  );
};

export default HajjSidebarRight;

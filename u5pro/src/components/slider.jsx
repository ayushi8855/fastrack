import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "swiper/css/navigation";
import "swiper/css/pagination";
 import "./slider.css"

 import { Navigation, Pagination, Autoplay } from "swiper";



export const Slider = () => {
	return (
	  <Swiper
		spaceBetween={50}
		slidesPerView={1}
		onSlideChange={() => console.log('slide change')}
		onSwiper={(swiper) => console.log(swiper)}
		navigation={true} 
		pagination={true}
		autoplay={true}
		modules={[Navigation, Pagination, Autoplay]}
		className="mySwiper"
	  >
		<SwiperSlide><img src="https://www.fastrack.in/wps/wcm/connect/fastrack/532d3d01-1405-4e0e-9194-571116e1b202/desktop/1920X600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-532d3d01-1405-4e0e-9194-571116e1b202-desktop-o1RG1-8&impolicy=pqlow"/></SwiperSlide>
		<SwiperSlide><img src="https://www.fastrack.in/wps/wcm/connect/fastrack/a9a24755-2bd1-4521-9c8e-65f968be25e5/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-a9a24755-2bd1-4521-9c8e-65f968be25e5-desktop-o28DEiF&impolicy=pqlow"/></SwiperSlide>
		<SwiperSlide><img src="	https://www.fastrack.in/wps/wcm/connect/fastrack/026b029b-a062-4e3b-b245-7f6b718bc368/desktop/banner_Desktop.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-026b029b-a062-4e3b-b245-7f6b718bc368-desktop-o1wfKJy&impolicy=pqlow"/></SwiperSlide>
		<SwiperSlide><img src="https://www.fastrack.in/wps/wcm/connect/fastrack/93bc619d-5f75-4f3f-b3f2-175676b0c27c/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-93bc619d-5f75-4f3f-b3f2-175676b0c27c-desktop-nZ0GpjO&impolicy=pqlow"/></SwiperSlide>
        <SwiperSlide><img src="https://www.fastrack.in/wps/wcm/connect/fastrack/ad7bf060-f0a4-4542-bfb3-34fda82b4249/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-ad7bf060-f0a4-4542-bfb3-34fda82b4249-desktop-n.PzChT&impolicy=pqlow"/></SwiperSlide>
        <SwiperSlide><img src="https://www.fastrack.in/wps/wcm/connect/fastrack/6eb2f80b-fcde-48df-bd51-f104dda023ab/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-6eb2f80b-fcde-48df-bd51-f104dda023ab-desktop-n.PTdWZ&impolicy=pqlow"/></SwiperSlide>
	  </Swiper>
	);
};
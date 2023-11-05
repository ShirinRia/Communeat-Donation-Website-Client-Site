import './Banner.css'
import banner from "../../../../assets/raf,360x360,075,t,fafafa_ca443f4786.jpg"
import Carousel from 'react-elastic-carousel'
const Banner = () => {
    return (
        // <div className=' h-[100vh]'>
        //     <div className='back  h-[100vh] '>
        //         <div className="darker">&nbsp;</div>
        //     </div>
        // </div>
        <section>
            <Carousel


                transitionMs={700} enableAutoPlay autoPlaySpeed={1500}
            >
                <item><img src={banner} alt="" className='w-[100vw] h-[70vh]' /></item>
                <item>2</item>
                <item>3</item>
                <item>4</item>
                <item>5</item>
                <item>6</item>
            </Carousel>
        </section>

    );
};

export default Banner;
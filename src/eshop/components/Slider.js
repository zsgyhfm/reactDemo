//轮播
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
class Slider extends React.Component{
    render() {

        return (
            <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src={"http://demo.demohuo.top/modals/17/1779/demo/images/1.jpg"} alt={""}/>
                    {/*<p className={"legend"}>Legend 1</p>*/}
                </div>
                <div>
                    <img src={"http://demo.demohuo.top/modals/17/1779/demo/images/2.jpg"} alt={""}/>
                    {/*<p className={"legend"}>Legend 2</p>*/}
                </div>
                <div>
                    <img src={"http://demo.demohuo.top/modals/17/1779/demo/images/3.jpg"} alt={""}/>
                    {/*<p className={"legend"}>Legend 3</p>*/}
                </div>
            </Carousel>
        );

    }
}
export default Slider

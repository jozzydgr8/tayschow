import { InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeFilled, YoutubeOutlined } from "@ant-design/icons"
import vidback from '../assets/vidback.mp4'
export const Header = ()=>{
    return(
        <section id="header">
            <div className="">
                
                <div className="video-background">
                    <video autoPlay muted loop playsInline>
                        <source src={vidback} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="content">
                       {/* <h3>Welcome Tayschow</h3>
                        <p style={{fontSize:'23px'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolores doloremque. Exercitationem, vo
                            luptates perspiciatis eaque deserunt a animi minima velit voluptas? Minima voluptate obcaecati quasi rem, harum error. Quas, quia!
                        </p> */}
                    </div>
                </div>
                
                <div style={{display:'flex',
                     flexDirection:'column',
                     position:'absolute',
                     right:'0',
                     paddingRight:"5%",
                     top:'200px',
                     fontSize:'25px',
                     justifyContent:"center",
                     alignItems:'center',
                     zIndex:'1',
                     gap:"15px"

                     }}>
                    <div><InstagramOutlined/></div>
                    <div><LinkedinOutlined/></div>
                    <div><YoutubeOutlined/></div>
                    <div><TwitterOutlined/></div>
                </div>
            </div>
        </section>
    )
}
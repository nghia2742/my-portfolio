import { NextjsIcon, ReactjsIcon, NodejsIcon, LaravelIcon } from "./IconSVG"

export const Skills = () => {
  return (
    <div className="flex gap-5 justify-center" >
        <span data-aos="fade-left"><NextjsIcon/></span>
        <span data-aos="fade-left" data-aos-delay="50"><ReactjsIcon/></span>
        <span data-aos="fade-left" data-aos-delay="100"><NodejsIcon/></span>
        <span data-aos="fade-left" data-aos-delay="150"><LaravelIcon/></span>
    </div>
  )
}

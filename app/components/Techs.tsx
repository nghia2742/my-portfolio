import { DockerIcon, GitIcon, MongodbIcon, MysqlIcon, RedisIcon } from "./IconSVG"

export const Techs = () => {
  return (
    <div className="flex gap-5 justify-center overflow-hidden">
        <span data-aos="fade-left" data-aos-delay="200"><MongodbIcon/></span>
        <span data-aos="fade-left" data-aos-delay="250"><MysqlIcon/></span>
        <span data-aos="fade-left" data-aos-delay="300"><GitIcon/></span>
        <span data-aos="fade-left" data-aos-delay="350"><DockerIcon/></span>
        <span data-aos="fade-left" data-aos-delay="400"><RedisIcon/></span>
    </div>
  )
}

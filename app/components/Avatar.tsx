import Image from 'next/image';
import Avt from '../assets/avt.jpg';
export const Avatar = () => {
    return (
        <div className="avatar mb-10 flex justify-center" data-aos="zoom-in">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                    src={Avt}
                    alt="Avatar"
                    width={1024}
                    height={1024}
                />
            </div>
        </div>
    );
};

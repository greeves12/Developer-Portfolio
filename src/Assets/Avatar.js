
import avatar from './av.png';

const Avatar = () => {
    return(
        <div className='hidden xl:flex xl:max-w-none'>
        <img src={avatar} 
            width={737}
            height={678}
            alt=''
            className='w-full h-full translate-z-0 object-cover'
        />
        </div>
    );
}

export default Avatar;
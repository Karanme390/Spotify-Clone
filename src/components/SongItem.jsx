// import React, { useContext } from 'react'
// import { PlayerContext } from '../context/PlayerContext'

// const SongItem = ({name,image,desc,id}) => {

//   const {playWithId} = useContext(PlayerContext)


//   return (
//     <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
//         <img className='rounded'src={image} alt="" />
//         <p className='text-slate-200 text-sm'>{name}</p>
//         <p className='text-slate-200 text-sm'>{desc}</p>
//     </div>
//   )
// }

// export default SongItem



import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({ name, image, desc, id }) => {
    const { playWithId } = useContext(PlayerContext);

    return (
        <div
            role="button"
            aria-label={`Play ${name}`}
            onClick={() => playWithId(id)}
            className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'
        >
            <img className='rounded' src={image} alt={`Cover art for ${name}`} />
            <p className='text-slate-200 text-sm'>{name}</p>
            {desc && <p className='text-slate-200 text-sm'>{desc}</p>}
        </div>
    );
};

SongItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string,
    id: PropTypes.number.isRequired,
};

export default SongItem;

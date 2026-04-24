import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between items-center gap-4 bg-gray-200 py-4 max-w-300 mx-auto rounded-md px-2'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique, voluptatem recusandae nihil voluptate quod nisi id, inventore aspernatur veniam, porro obcaecati animi modi tempora ex quaerat sunt sapiente rem laborum quasi fuga possimus veritatis et. Ipsa fuga rerum, perferendis, odio quam nesciunt magni nemo vitae minus autem nisi illo quisquam excepturi reprehenderit! Voluptatem mollitia aspernatur error suscipit. Impedit mollitia delectus dolorum distinctio veniam accusantium doloribus soluta neque nemo tempore omnis aut fugit explicabo harum natus, itaque eaque expedita voluptatum culpa sequi ad suscipit. Recusandae ad quasi, nulla beatae obcaecati rerum vero. Molestiae iste et nemo porro, quos dicta quisquam.
            </Marquee>
        </div>
    );
};

export default BreakingNews;
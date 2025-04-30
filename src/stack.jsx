export default function Stack() {

    const techstack = [

        { name: 'Blender', img: './images/blender.svg' },
        { name: 'ReactJs', img: './images/react.svg' },
        { name: 'JavaScript', img: './images/javascript.svg' },
        { name: 'HTML5', img: './images/html.svg' },
        { name: 'CSS', img: './images/css.svg' },
        { name: 'TailwindCss', img: './images/tailwindcss.svg' },
        { name: 'ThreeJs', img: './images/threejs.svg' },
        { name: 'Flutter', img: './images/flutter.svg' },


    ];

    const listItems = techstack.map((item, index) => (
        <div
            key={index}
            className="mb-4  w-20 h-20 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-black hover:text-amber-50 transition-colors duration-300"
        >
            <div className="text-center">
                <h3 className="font-bold text-[10px]">{item.name}</h3>
                <img src={item.img} className="w-8 h-8 mx-auto" />
            </div>
        </div>


    ));
    return (
        <div className="mt-4 columns-2 [column-gap:16px]">
            {listItems}
        </div>



    )

}
const boxes = [
    'box1',
    'box2',
    'box3',
    'box4',
    'box5',
    'box6',
    'box7',
    'box8',
    'box9',
    'box10',
    'box11',
    'box12',
];

const CardGrid = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {boxes.map((box) => (
                    <li
                        key={box}
                        className="border px-2 py-10 text-center shadow-md hover:scale-110 duration-200"
                    >
                        {box}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardGrid;

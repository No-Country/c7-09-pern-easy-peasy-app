
const mockCourses = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
    {
        id: 4,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
    {
        id: 5,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
    {
        id: 6,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
    {
        id: 7,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
    {
        id: 8,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
    {
        id: 9,
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        name: 'HTML + CSS desde cero',
        description: '¡Lleva tu diseño al navegador con este curso!',
        punctuation: 4.8,
        price: 20000
    },
];

const Courses = () => {

    return (
        <div>
            <label htmlFor="select-order">Ordenado por:</label>
            <select name="" id="select-order">
                <option value="">Recomendados</option>
                <option value="">Populares</option>
                <option value="">Fecha de actualización</option>
                <option value="">Puntuación</option>

            </select>
            {
                (mockCourses.length === 0) ?
                    <p>There are no courses</p> :
                    mockCourses.map(course => (
                        <div key={course.id}>
                            <img src={course.img} alt={course.name} />
                            <p>{course.name}</p>
                            <p>{course.description}</p>
                            <div>
                                <span>{course.punctuation}</span>
                                <span>${course.price} ARS</span>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};


export default Courses;
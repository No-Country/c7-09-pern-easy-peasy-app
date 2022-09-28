const mockRoutes = [
    {
        id: 1,
        name: 'Especialidad de React',
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        description: 'Dedicado a los que quieran actualizarse y llevar sus conocimientos un paso más alla.',
        numCourses: 3,
        punctuation: 4.8
    },
    {
        id: 2,
        name: 'Especialidad de React',
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        description: 'Dedicado a los que quieran actualizarse y llevar sus conocimientos un paso más alla.',
        numCourses: 3,
        punctuation: 4.8
    },
    {
        id: 3,
        name: 'Especialidad de React',
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        description: 'Dedicado a los que quieran actualizarse y llevar sus conocimientos un paso más alla.',
        numCourses: 3,
        punctuation: 4.8
    },
    {
        id: 4,
        name: 'Especialidad de React',
        img: 'https://res.cloudinary.com/di6mevrkr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1664078429/no-available_endtpu.jpg',
        description: 'Dedicado a los que quieran actualizarse y llevar sus conocimientos un paso más alla.',
        numCourses: 3,
        punctuation: 4.8
    },
];

const Routes = () => {

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
                (mockRoutes.length === 0) ?
                <p>There are no routes</p> :
                mockRoutes.map(route => (
                    <div key={route.id}>
                        <img src={route.img} alt={route.name} />
                        <p>{route.name}</p>
                        <div>
                            <span>{route.numCourses} Cursos</span>
                            <span>{route.punctuation}</span>
                        </div>
                        <p>{route.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Routes;
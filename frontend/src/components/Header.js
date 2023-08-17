import React from 'react';

//para puxar apenas o title:
export default function Header({title}) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

//se quiser puxar TODAS as propriedades, mas retornando, especificamente, apenas o title:
// export default function Header(props) {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     );
// }

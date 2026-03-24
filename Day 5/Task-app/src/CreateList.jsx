import ColorsBox from "./ColorBox";

function CreateList(){
    

    const Colors = ['red' , 'blue' , 'green', 'pink' , 'orange' , 'purple' , 'violet' , 'grey' , 'magenta' ];

    const ColorsList = Colors.map((color,key) => {
        return <ColorsBox  key={key} color={color}/>
    });

    return(
        <div>
            {ColorsList}
        </div>
    );
}

export default CreateList;
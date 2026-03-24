function ColorsBox({ color }){

    return (
        <div style={{ display: 'flex', margin :' 10px', padding :'10px',justifyContent :'center' , color :'white' , backgroundColor:`${color}` }} >
            {color}
        </div>
    );

}

export default ColorsBox;
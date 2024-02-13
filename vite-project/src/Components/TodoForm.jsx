m =()=>{
    const todo=[
{name:"task1", priority:"1"},
{name:"task2", priority:"2"},
    ]
return(
    <div
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        border:"2px solid orange",
        minHeight:200,
        flexDirection:"wrap",
        
        
    }}> 
    

    <h2
    style={{
        border:"3px sol red",
        textShadow:"blue",
    } }>Todo App</h2>


<form>
    <input type="text" name="nm" defaultValue="name : "
    style={{
        display:"block",
        backgroundColor:"green",
        
    }

    }>

    </input>

</form>

{todo.map((Element,index) => (
<div key={index}>
{Element.name} {Element.priority}
</div>

))}

</div>
)

}
export default TodoForm;
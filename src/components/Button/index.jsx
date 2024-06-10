export default function Button(props){

    const style = {
        buttonStyle: {
            border: "5px blue",
            backgroundColor: "transparent",
            padding: "15px"
        
        }
    }

    return (
        <>
        <button style={style.buttonStyle} onClick={props.do}>{props.title}</button>
        </>
    )
}
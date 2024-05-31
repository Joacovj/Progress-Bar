export default function ProgressBar(props){
    return (
        <div>
    <h1>Progress Bar</h1>
    <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "40px" }}>
        <div
        style={{
            width: `${props.progress}%`,
            backgroundColor: "#007bff",
            height: "24px",
            borderRadius: "40px",
        }}
        ></div>
    </div>
    <p>{props.progress}% Complete</p>
    </div>
    )
}
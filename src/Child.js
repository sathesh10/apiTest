const Child = (props) => {
    return (
        <div>
            This is child
            {props.value}<br />
            {props.email}<br />
            {props.ph_no}<br />

            <button onClick={(e) => {
                e.preventDefault();
                props.onButtonPress('check')
            }}>push data</button>
        </div>
    );
}

export default Child;
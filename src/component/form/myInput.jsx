export function MyInput(props) {

    const {label, name, type, values, className, handleChange} = props;

    return (
        <>          
            <div>
                <label htmlFor={name}> {label}
                    <input 
                        type={type}
                        name={name}
                        id={name}
                        className={className}
                        onChange={handleChange} 
                        value={values}
                    />
                </label>
            </div>
        </> 
    )
}
import styles from "./styles/Input.module.css"

interface InputWithLabelAndIconProps {
    label: string
    type: React.HTMLInputTypeAttribute
    name: string
    value: string
    onValueChange: (newValue: string) => void
    required?: boolean
    icon?: JSX.Element
    modifier?: React.CSSProperties
}

function InputWithLabelAndIcon({ label, name, type, value, onValueChange, required = true, icon, modifier }: InputWithLabelAndIconProps) {
    return(
        <div style={modifier}>
            <label className={styles.input_label} htmlFor={name}>{label}</label>
            <div className={styles.input_container}>
                {icon}
                <input
                    className={styles.input}
                    type={type}
                    name={name}
                    value={value}
                    onChange={(e) => {
                        onValueChange(e.target.value)
                    }}
                    required={required}
                />
            </div>
        </div> 
    )
}

export default InputWithLabelAndIcon
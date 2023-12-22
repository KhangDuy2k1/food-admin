import { Button } from "antd";
const ButtonComponent = ({children, ...props}) => {
    return (
        <Button
        {...props}
        >
        {children}    
        </Button>
    )
}
export default ButtonComponent;
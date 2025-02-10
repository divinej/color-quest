type Props = {
    boxColor: string;
    animate?: string;
    disabled: boolean
    click: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const ColorBox = ({boxColor, click, animate, disabled }:Props) => {
    return(
        <button type="button" onClick={click} className={`colorBox h-32 md:h-40 w-100 rounded ${animate}`} style={{backgroundColor: boxColor}} data-testid="colorOption" disabled={disabled}>

        </button>
    )
}
    
export default ColorBox;
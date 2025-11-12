import "./IconButton.css"
export type IconButtonProps = {
    name: String;
    value: String;
    onClick?: () => void;
}
export function IconButton({ name, value, onClick }: IconButtonProps) {
    return <button type="button" onClick={onClick}>
        <span class="material-symbols-outlined">
            {name}
        </span>
        {value}
    </button>
}
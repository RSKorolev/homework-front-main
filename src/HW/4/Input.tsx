type InputPropsType = {
    currentText: string; // НУЖНО ПРОТИПИЗИРОВАТЬ
    setCurrentText: (text: string) => void; // НУЖНО ПРОТИПИЗИРОВАТ
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setCurrentText(event.target.value);
    };

    return (
        <input
            id={'hw04-input'}
            type="text"
            value={props.currentText}
            onChange={onChangeHandler}
        />
    );
};

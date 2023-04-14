function useBoldSubstring(subString) {
    return function (string) {
        const parts = string.split(new RegExp(`(${subString})`, 'gi'));
        return (
            <>
                {parts.map((part, i) => (
                    <span
                        key={i}
                        style={
                            part.toLowerCase() === subString.toLowerCase()
                                ? { fontWeight: 'bold' }
                                : null
                        }
                    >
                        {part}
                    </span>
                ))}
            </>
        );
    };
}

export default useBoldSubstring;

const date = new Date();

export default function Footer(params) {
    return (
        <>
            <footer>
                <p>Copyright Ygt {date.getFullYear()}</p>
            </footer>
        </>
    );
}

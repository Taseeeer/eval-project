import Header from "../header/header";

export default function Layout({ children }) {
    return (
        <>
        <Header />
        { children }
        </>
    )
}
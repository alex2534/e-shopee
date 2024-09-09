import { Navbar, Container } from "react-bootstrap";
import styles from "./navBar.module.css";

export default function NavBar() {
    return (
        <>
            <div className={styles.navContainer}>
                <Navbar >
                    <Container >
                        <div className={styles.container}>
                            <h4>Made By Alex</h4>
                            <h6>With React-typescript, css, and bootstrap</h6>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}
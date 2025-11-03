import styles from "./Banner.module.less";

function Banner() {
    return(
        <header className={`pt-4 pb-4 ${styles.banner}`}>
            <h1 className="text-center">CELEBminder</h1>
        </header>
    );
}

export default Banner;
